/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ifs.spitalscraper;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author tarnschaf
 */
public class Spital {

    List<String> inputlist = new ArrayList<>();

    String name;
    String name2;
    String address;
    String postcode;
    String city;

    public void parseInputs() {

        if (inputlist.size() == 2) {
            name = inputlist.get(0);
            postcode = inputlist.get(1).substring(0, 5);
            city = inputlist.get(1).substring(6, inputlist.get(1).length());
        }
        if (inputlist.size() == 3) {
            name = inputlist.get(0);
            address = inputlist.get(1);
            postcode = inputlist.get(2).substring(0, 5);
            city = inputlist.get(2).substring(6, inputlist.get(2).length());
        }
        if (inputlist.size() == 4) {
            name = inputlist.get(0);
            name2 = inputlist.get(1);
            address = inputlist.get(2);
            postcode = inputlist.get(3).substring(0, 5);
            city = inputlist.get(3).substring(6, inputlist.get(3).length());
        }

        if (inputlist.size() == 5) {
            name = inputlist.get(0);
            name2 = inputlist.get(1);
            address = inputlist.get(2);
            postcode = inputlist.get(3).substring(0, 5);
            city = inputlist.get(4).substring(6, inputlist.get(4).length());
        }
    }

    public void add(String input) {
        inputlist.add(input);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public List<String> getInputlist() {
        return inputlist;
    }

    public void setInputlist(List<String> inputlist) {
        this.inputlist = inputlist;
    }

    public String getName2() {
        return name2;
    }

    public void setName2(String name2) {
        this.name2 = name2;
    }

}
