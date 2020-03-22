/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ifs.spitalscraper;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;
import java.util.concurrent.ExecutionException;

public class Main {

    public static void main(String[] args) throws FileNotFoundException, IOException, InterruptedException, ExecutionException {
        List<Spital> spitals = new Parser().parseSpitals();

//        Spital get = spitals.get(12);
        for (Spital spital : spitals) {
            //  spital = retrieveCoords(spital);
            //  Thread.sleep(2000);
            System.err.println("ADDED " + spital);
        }

        new OutputWriter().writeToFile(spitals);

        //   new DbManager().pushToFirebase(spitals);
    }

    private static Spital retrieveCoords(Spital spital) throws MalformedURLException, IOException {
        try {
            String address = spital.getAddress().replace(" ", "%20");
            String location = (spital.getPostcode() + "%20" + spital.getCity()).replace(" ", "%20");

            String sURL = "https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf6248625074a9ab994dcd940625d6b583a313&text=" + address + "%20" + location;

            URL url = new URL(sURL);
            URLConnection request = url.openConnection();
            request.connect();

            JsonParser jp = new JsonParser();
            JsonElement root = jp.parse(new InputStreamReader((InputStream) request.getContent()));
            JsonArray arr = root.getAsJsonObject().getAsJsonArray("features");
            JsonObject feature = arr.get(0).getAsJsonObject();
            JsonObject geometry = feature.get("geometry").getAsJsonObject();
            JsonArray coords = geometry.get("coordinates").getAsJsonArray();

            spital.setLatitude(coords.get(1).getAsDouble());
            spital.setLongitute(coords.get(0).getAsDouble());

        } catch (Exception ex) {
            System.err.println(spital);
        }
        return spital;
    }

}
