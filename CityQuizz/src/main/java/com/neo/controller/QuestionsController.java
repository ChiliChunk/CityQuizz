package com.neo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuestionsController {

    @CrossOrigin
    @RequestMapping("/questions")
    public String returnQuestions() {
        return "[{\"label\" : \"Quel film est le mieux?\", \"answers\" : [\"Avatar\" , \"James Bond\" , \"Dumbo\" , \"American Sniper\"] , \"rightAnswer\" : 0 , \"answered\" : -1}," +
                "{\"label\" : \"Quel film est le pire?\", \"answers\" : [\"Taxi\" , \"Pirate des caraibes\" , \"Brice de Nice\" , \"0SS117\"] , \"rightAnswer\" : 2 , \"answered\" : -1}]";
    }


}