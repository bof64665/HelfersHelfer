/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ifs.spitalscraper;

import com.google.gson.Gson;
import java.util.List;

/**
 *
 * @author tarnschaf
 */
public class OutputWriter {

    public void writeToFile(List<Spital> spitals) {
        Gson gson = new Gson();
        String toJson = gson.toJson(spitals);
        
        
        
    }

}
