const acceuil = require('./assets/images/Acceuil.png')
const bain = require('./assets/images/bain.png')
const chambre = require('./assets/images/chambre.png')
const salon = require('./assets/images/salon.png')
const bibliotheque = require('./assets/images/bibliotheque.png')
const generateur = require('./assets/images/generateur.png')

export default{
  "game" : [
    {
      "id" : 0,
      "message" : "J'ai plus de batterie, il faut que je trouve un téléphone",
      "image": acceuil,
      "actions" : {
        "1" : {
          "message" : "Bibliothèque",
          "path" : "/game/1"
        },
        "2" : {
          "message" : "Chambre",
          "path" : "/game/3"
        },
        "3" : {
          "message" : "Salon",
          "path" : "/game/5"
        }
      }
    },
    {
      "id" : 1,
      "image": bibliotheque,
      "actions": {
        "1": {
          "message": "Accueil",
          "path": "/game/0"
        },
        "2": {
          "message": "Salle du générateur",
          "path": "/game/2"
        }
      }
    },
    {
      "id" : 2,
      "image": generateur,
      "actions": {
        "1": {
          "message": "Bibliothèque",
          "path": "/game/1"
        },
        "2": {
          "message": "???",
          "path": "/lose"
        }
      }
    },
    {
      "id" : 3,
      "image": chambre,
      "actions": {
        "1": {
          "message": "Accueil",
          "path": "/game/0"
        },
        "2": {
          "message": "Salle de bain",
          "path": "/game/4"
        }
      }
    },
    {
      "id" : 4,
      "message" : "Je dois vite allumer ce générateur",
      "image": bain,
      "actions": {
        "1": {
          "message": "Chambre",
          "path": "/game/3"
        }
      }
    },
    {
      "id" : 5,
      "message" : "Je dois appeler la police",
      "error": "Il n'y a pas de courant. Il faut que je l'allume.",
      "image": salon,
      "actions": {
        "1": {
          "message": "Accueil",
          "path": "/game/0"
        }
      }
    }
  ]
}