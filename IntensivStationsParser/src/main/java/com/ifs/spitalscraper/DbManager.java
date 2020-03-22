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
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author tarnschaf
 */
public class DbManager {

    public void pushToFirebase(List<Spital> spitals) throws IOException {



        FileInputStream serviceAccount = new FileInputStream("C:\\Users\\tarnschaf\\service-account-file.json");

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .setDatabaseUrl("https://helfershelfer-fc174.firebaseio.com")
                .build();

        FirebaseApp.initializeApp(options);

        Firestore db = FirestoreClient.getFirestore();

        for (Spital spital : spitals) {

            try {
                DocumentReference docRef = db.collection("Intensivdb").document(spital.name);
                Map<String, Object> data = new HashMap<>();
                data.put("name", spital.getName());
                data.put("name2", spital.getName2());
                data.put("address", spital.getAddress());
                data.put("postcode", spital.getPostcode());
                data.put("city", spital.getCity());
                data.put("latitude", spital.getLatitude());
                data.put("longitude", spital.getLongitute());

                ApiFuture<WriteResult> result = docRef.set(data);
                System.out.println("Update time : " + result.get().getUpdateTime());
            } catch (Exception ex) {
                System.err.println("");
            }
        }
    }

}
