/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ifs.spitalscraper;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import org.apache.commons.lang3.StringUtils;

/**
 *
 * @author tarnschaf
 */
public class Parser {

    public List<Spital> parseSpitals() throws UnsupportedEncodingException, FileNotFoundException, IOException {

        List<Spital> spitals = new ArrayList<>();

        File file = new File("C:\\Users\\tarnschaf\\Desktop\\Virusprojekt\\kliniken.txt");

        //BufferedReader br = new BufferedReader(new FileReader(file));
        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(file), "UTF8"));

        int counter = 0;
        Spital s = new Spital();
        String st;
        while ((st = br.readLine()) != null) {
            s.add(st);

            if (containsPlz(st)) {
                spitals.add(s);
                s = new Spital();
            }
        }

        for (Spital spital : spitals) {
            spital.parseInputs();
        }

        return spitals;
    }


    private boolean containsPlz(String input) {
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
