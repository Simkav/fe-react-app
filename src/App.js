import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider';
const DB = [
  {
    id: 1,
    src:
      'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-cosmic-reef-2400x1200.jpg?t=tn1200',
    title: 'The Cosmic Reef: NGC 2014 and NGC 2020',
    description:
      'Hubble reveals a colorful landscape of iridescent gases, streamers of dust, and brilliant, newborn stars in the giant red nebula NGC 2014. The blue ring of glowing oxygen at left is the neighboring nebula NGC 2020, formed by a torrential gaseous outflow from a lone, massive, super-hot star at its center.',
  },
  {
    id: 2,
    src:
      'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-lagoon-nebula.jpg?t=tn1200',
    title: 'Lagoon Nebula',
    description:
      'The Lagoon Nebula, a vast stellar nursery located 4,000 light-years away, provides an extraordinary tapestry of star birth.',
  },
  {
    id: 3,
    src:
      'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-hh24.jpg?t=tn1200',
    title: 'The Cosmic Reef: NGC 2014 and NGC 2020',
    description:
      'Hubble reveals a colorful landscape of iridescent gases, streamers of dust, and brilliant, newborn stars in the giant red nebula NGC 2014. The blue ring of glowing oxygen at left is the neighboring nebula NGC 2020, formed by a torrential gaseous outflow from a lone, massive, super-hot star at its center.',
  },
  {
    id: 4,
    src:
      'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-eagle-nebula.jpg?t=tn1200',
    title: 'Lagoon Nebula',
    description:
      'The Lagoon Nebula, a vast stellar nursery located 4,000 light-years away, provides an extraordinary tapestry of star birth.',
  },
  {
    id: 5,
    src:
      'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-saturn.jpg?t=tn1200',
    title: 'The Cosmic Reef: NGC 2014 and NGC 2020',
    description:
      'Hubble reveals a colorful landscape of iridescent gases, streamers of dust, and brilliant, newborn stars in the giant red nebula NGC 2014. The blue ring of glowing oxygen at left is the neighboring nebula NGC 2020, formed by a torrential gaseous outflow from a lone, massive, super-hot star at its center.',
  },
];
function App(props) {
  return (
    <>
      <Slider slides={DB} />
    </>
  );
}

export default App;
