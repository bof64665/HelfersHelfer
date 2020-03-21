/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ifs.spitalscraper;

import com.google.api.core.ApiFuture;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;
import com.google.gson.Gson;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import org.apache.commons.lang3.StringUtils;

/**
 *
 * @author tarnschaf
 */
public class Main {

    public static void main(String[] args) throws FileNotFoundException, IOException, InterruptedException, ExecutionException {

        List<Spital> spitlist = new ArrayList<>();

        File file = new File("C:\\Users\\tarnschaf\\Desktop\\Virusprojekt\\kliniken.txt");

        //BufferedReader br = new BufferedReader(new FileReader(file));
        BufferedReader br = new BufferedReader(
                new InputStreamReader(
                        new FileInputStream(file), "UTF8"));

        int counter = 0;
        Spital s = new Spital();
        String st;
        while ((st = br.readLine()) != null) {
            s.add(st);

            if (containsPlz(st)) {
                spitlist.add(s);
                s = new Spital();
            }
        }

        for (Spital spital : spitlist) {
            spital.parseInputs();
        }

        System.err.println("");

        Gson gson = new Gson();
        String toJson = gson.toJson(spitlist);
//
//        System.err.println(toJson);

        String str = "C:\\Users\\tarnschaf\\Desktop\\Virusprojekt\\output.txt";
        BufferedWriter writer = new BufferedWriter(new FileWriter(str));
        writer.write(toJson);

        writer.close();

        FileInputStream serviceAccount = new FileInputStream("C:\\Users\\tarnschaf\\service-account-file.json");

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .setDatabaseUrl("https://helfershelfer-fc174.firebaseio.com")
                .build();

        FirebaseApp.initializeApp(options);

        Firestore db = FirestoreClient.getFirestore();

        for (Spital spital : spitlist) {

            try {
                DocumentReference docRef = db.collection("Intensivdb").document(spital.name);
                Map<String, Object> data = new HashMap<>();
                data.put("name", spital.getName());
                data.put("name2", spital.getName2());
                data.put("address", spital.getAddress());
                data.put("postcode", spital.getPostcode());
                data.put("city", spital.getCity());

                ApiFuture<WriteResult> result = docRef.set(data);
                System.out.println("Update time : " + result.get().getUpdateTime());
            } catch (Exception ex) {
                System.err.println("");
            }
        }

    }

    public static boolean containsPlz(String input) {
        if (input.length() < 5) {
            return false;
        }

        for (int i = 1; i < 5; i++) {
            if (!StringUtils.isNumeric(input.substring(0, i))) {
                return false;
            }
        }
        return true;

    }

}
