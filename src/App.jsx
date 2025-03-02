import Header from "./widgets/Header/Header";
import Main from "./widgets/Main/Main";
import InfiniteOne from "./assets/images/inifinite.png"
import Topic from "./assets/images/topic.png"
import Gaming from "./assets/images/Lux-Gaming.png"
import Mexant from "./assets/images/Mexant.png"
import Design from "./assets/images/Design.png"
import { useState, useEffect } from "react";




const App = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem("isDarkTheme");
    return storedTheme === "true";
  });

  const toggleBurger = () => {
    setBurgerOpen((prev) => (!prev));
  }

  const closeBurger = () => {
    setBurgerOpen(false);
  }

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev)
  }

  useEffect(() => {
    localStorage.setItem("isDarkTheme", isDarkTheme);
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);


  const projects = [
    {
      title: 'Infinite-Loop',
      image: InfiniteOne,
      descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus explicabo quaerat quod a doloribus quas esse iure at corporis alias est similique saepe voluptate odit vitae, optio dignissimos ad? Quam iusto cumque voluptatibus autem debitis nihil iste et enim est quasi illum aspernatur id, deserunt quas rerum totam quis.',
      github: 'https://github.com/mirsaid9945/Infinite-Loop',
      chek: 'https://mirsaid9945.github.io/Infinite-Loop/',
    },

    {
      title: 'Mexant',
      image: Mexant,
      descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus explicabo quaerat quod a doloribus quas esse iure at corporis alias est similique saepe voluptate odit vitae, optio dignissimos ad? Quam iusto cumque voluptatibus autem debitis nihil iste et enim est quasi illum aspernatur id, deserunt quas rerum totam quis. dolor sit amet consectetur adipisicing elit. Dolore aperiam voluptatem ut mollitia reiciendis molestias dicta, nulla iusto facilis nihil, porro numquam illum, ea officia et. Minima voluptatem quos doloremque.',
      github: 'https://github.com/mirsaid9945/Mexant',
      chek: 'https://mirsaid9945.github.io/Mexant/',
    },

    {
      title: 'Lux-Gaming',
      image: Gaming,
      descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus explicabo quaerat quod a doloribus quas esse iure at corporis alias est similique saepe voluptate odit vitae, optio dignissimos ad? Quam iusto cumque voluptatibus autem debitis nihil iste et enim est quasi illum aspernatur id, deserunt quas rerum totam quis.',
      github: 'https://github.com/mirsaid9945/lux-gaming',
      chek: 'https://mirsaid9945.github.io/lux-gaming/',
    },

    {
      title: 'TopicListing',
      image: Topic,
      descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus explicabo quaerat quod a doloribus quas esse iure at corporis alias est similique saepe voluptate odit vitae, optio dignissimos ad? Quam iusto cumque voluptatibus autem debitis nihil iste et enim est quasi illum aspernatur id, deserunt quas rerum totam quis.',
      github: 'https://github.com/mirsaid9945/TopicListing',
      chek: 'https://mirsaid9945.github.io/TopicListing/',
    },

    {
      title: 'Pop-Design',
      image: Design,
      descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus explicabo quaerat quod a doloribus quas esse iure at corporis alias est similique saepe voluptate odit vitae, optio dignissimos ad? Quam iusto cumque voluptatibus autem debitis nihil iste et enim est quasi illum aspernatur id, deserunt quas rerum totam quis.',
      github: 'https://github.com/mirsaid9945/Pop-Design',
      chek: 'https://mirsaid9945.github.io/Pop-Design/',
    },

  ];

  return (
    <>
      <Header
        toggleBurger={toggleBurger}
        closeBurger={closeBurger}
        isBurgerOpen={isBurgerOpen}
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
      />
      <Main
        projects={projects}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex} />
    </>
  );
};

export default App;
