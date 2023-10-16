import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  Container,
  Engine,
} from "tsparticles-engine";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
import { faEnvelope, faPhone, faLocationDot, faShareFromSquare, faCode, faPenNib, faShareNodes }  from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faLinkedin, faFacebook, faGithub} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My Portfolio';
  icEnvelop = faEnvelope;
  icPhone = faPhone;
  icLocation = faLocationDot;
  icShare = faShareFromSquare
  icCode = faCode;
  icDesign = faPenNib;
  icAPI = faShareNodes;

  icLinkedIn = faLinkedin;
  icInstagram = faInstagram;
  icFacebook = faFacebook;
  icGitHub = faGithub;

  id = "tsparticles";

  /* or the classic JavaScript object */
  particlesOptions = {
    background: {
      color: {
        value: "#FBF7F0",
      },
    },
    fpsLimit: 500,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#D9E4DD",
      },
      links: {
        color: "#D9E4DD",
        distance: 150,
        enable: true,
        opacity: 20,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

    particlesLoaded(container: Container): void {
      console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
      console.log(engine);

      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(engine);
  }

  ngOnInit(): void {
    AOS.init({
      offset: 100,
      duration: 1500
  });
  }
}
