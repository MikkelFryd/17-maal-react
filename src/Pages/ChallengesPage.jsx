import { Article } from "../Components/Partials/Article/Article"
import React from 'react'
import LeaveNoOne from "../Assets/Images/Image-Leave-No-One.jpg";
import Sustainability from "../Assets/Images/Image-Sustainability.jpg";
import Hunger from "../Assets/Images/Image-Hunger.jpg";

export const ChallengesPage = () => {
   
    // The articles to be passed into the <Article/> component
    const articlesToday = [
        {
          title: "Vækst vs bæredygtighed.",
          content:<p>En overordnet udfordring er, at der mangler et mere nuanceret syn på sammenhængen mellem vækst og bæredygtighed. Vægtning mellem økonomisk vækst og påvirkninger af miljø og samfund.<br></br><br></br> Opretholdes den nuværende globale, materielle vækst, øges presset på jordens ressourcer.<br></br><br></br> De livsunderstøttende økosystemer bliver i stigende grad overbelastet, og uligheden i verden vil blive større.</p>,
          image: Sustainability,
        },
        {
          title: "Leave no-one behind.",
          content: <p>I 2030-dagsordenen er inkluderet princippet om ”leave no one behind”. Princippet tilsiger, at alle lande skal opnå alle verdensmål, uden at nogen lades i stikken.<br></br><br></br> Arbejdet med verdensmålene skal begynde med, at de fattigste og mest marginaliserede adresseres først.<br></br><br></br> Dette er et vigtigt princip, hvortil også efterlevelsen af og respekten for menneskerettigheder er altafgørende.<br></br><br></br> Med andre ord: “Leave No-One behind”.</p>,
          image: LeaveNoOne,
        },
        {
          title: "Fattigdom og sult.",
          content: <p>Afskaffelsen af alle former for fattigdom er fortsat en af de største udfordringer for menneskedheden.<br></br><br></br> Mens antallet af mennesker, der lever i ekstrem fattigdom, er halveret - fra 1,9 milliarder i 1990 til 736 millioner i 2015 - kæmper alt for mange statig med at få opfyldt deres mest basale menneskelige behov.<br></br><br></br> Verdensbanken definerer "ekstrem fattigdom" som en personlig indkomst på under 1,9 dollars om dagen - dvs. cirka 13 kroner.</p>,
          image: Hunger,
        },
      ];

      // The articles to be passed into the <Article/> component
      const articlesTomorrow = [
        {
          title: "Tim Vs Sarangan.",
          content:<p>En overordnet udfordring er, at der mangler et mere nuanceret syn på sammenhængen mellem vækst og bæredygtighed. Vægtning mellem økonomisk vækst og påvirkninger af miljø og samfund.<br></br><br></br> Opretholdes den nuværende globale, materielle vækst, øges presset på jordens ressourcer.<br></br><br></br> De livsunderstøttende økosystemer bliver i stigende grad overbelastet, og uligheden i verden vil blive større.</p>,
          image: Sustainability,
        },
        {
          title: "Leave no-heinz behind.",
          content: <p>I 2030-dagsordenen er inkluderet princippet om ”leave no one behind”. Princippet tilsiger, at alle lande skal opnå alle verdensmål, uden at nogen lades i stikken.<br></br><br></br> Arbejdet med verdensmålene skal begynde med, at de fattigste og mest marginaliserede adresseres først.<br></br><br></br> Dette er et vigtigt princip, hvortil også efterlevelsen af og respekten for menneskerettigheder er altafgørende.<br></br><br></br> Med andre ord: “Leave No-One behind”.</p>,
          image: LeaveNoOne,
        },
        {
          title: "Fattigdom og skole.",
          content: <p>Afskaffelsen af alle former for fattigdom er fortsat en af de største udfordringer for menneskedheden.<br></br><br></br> Mens antallet af mennesker, der lever i ekstrem fattigdom, er halveret - fra 1,9 milliarder i 1990 til 736 millioner i 2015 - kæmper alt for mange statig med at få opfyldt deres mest basale menneskelige behov.<br></br><br></br> Verdensbanken definerer "ekstrem fattigdom" som en personlig indkomst på under 1,9 dollars om dagen - dvs. cirka 13 kroner.</p>,
          image: Hunger,
        },
      ];

      // Returns random boolean value (true or false)
      const getDay = () => {
        const date = Math.round(Math.random(0) * 1)
        console.log(date)
        if (date == 0){
            return true
        }
        else return false
      }



      // Conditional rendering based on boolean value returned from getDay()
    return (
        <>
            <Article articles={getDay() ? articlesToday : articlesTomorrow}/>
        </>
    )
}