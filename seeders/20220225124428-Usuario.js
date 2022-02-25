"use strict";
const bcrypt = require("bcrypt");
const authConfig = require("../config/auth");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          name: "Frannie Milvarnie",
          email: "fmilvarnie0@trellian.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Albacete",
          nickname: "administrador",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Nowell Davidofski",
          email: "ndavidofski1@aol.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 22,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Bearnard Niess",
          email: "bniess2@twitter.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 48,
          surname: "Albacete",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Frannie Ishaki",
          email: "fishaki3@mapquest.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 28,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Goldina Peaple",
          email: "gpeaple4@nsw.gov.au",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 68,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Cassey Le Frank",
          email: "cle5@icq.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 28,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Cristobal McKinstry",
          email: "cmckinstry6@goodreads.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Albacete",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Laural Remmers",
          email: "lremmers7@unblog.fr",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 58,
          surname: "Albacete",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Riobard Cape",
          email: "rcape8@oracle.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 22,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Abelard Simonutti",
          email: "asimonutti9@mlb.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 29,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Janice Wile",
          email: "jwilea@geocities.jp",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 33,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Costa Kelston",
          email: "ckelstonb@nature.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 12,
          surname: "Getafe",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Poul Lautie",
          email: "plautiec@ucoz.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 10,
          surname: "Albacete",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Bevin Spedding",
          email: "bspeddingd@europa.eu",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 20,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Mireielle Perfitt",
          email: "mperfitte@bizjournals.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 21,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Raina Bontine",
          email: "rbontinef@census.gov",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 22,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Benedetta Rickarsey",
          email: "brickarseyg@youku.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 23,
          surname: "Getafe",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Albie Ygou",
          email: "aygouh@aol.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 24,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Allegra Riedel",
          email: "ariedeli@pen.io",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Albacete",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Kanicknameina Kerrod",
          email: "kkerrodj@issuu.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Albacete",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Ramon Lewtey",
          email: "rlewteyk@paginegialle.it",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Getafe",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Issiah Weatherhead",
          email: "iweatherheadl@time.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Ira Kybird",
          email: "ikybirdm@privacy.gov.au",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Albacete",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Barrett Moors",
          email: "bmoorsn@pcworld.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Albacete",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Broderick Kenion",
          email: "bkeniono@newsvine.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Uriel Meconi",
          email: "umeconip@wufoo.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Getafe",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Evangelia Tavner",
          email: "etavnerq@addthis.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Getafe",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Celie Tunnah",
          email: "ctunnahr@usatoday.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Albacete",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Allin Massard",
          email: "amassards@vistaprint.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Conney Donovin",
          email: "cdonovint@indiatimes.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Jsandye Dingsdale",
          email: "jdingsdaleu@canalblog.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Albacete",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Koenraad Eccott",
          email: "keccottv@gravatar.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Getafe",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Yettie Valentine",
          email: "yvalentinew@github.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Albacete",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Evaleen Faircloth",
          email: "efairclothx@irs.gov",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Kellen Woolens",
          email: "kwoolensy@tinyurl.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Getafe",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Silvester Kenneway",
          email: "skennewayz@newsvine.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Getafe",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Boris Marciskewski",
          email: "bmarciskewski10@lulu.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Albacete",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Mohandas Rainy",
          email: "mrainy11@yelp.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Getafe",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Oliy McGuirk",
          email: "omcguirk12@prlog.org",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Kanya Kinneir",
          email: "kkinneir13@dailymotion.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Albacete",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Bone Bake",
          email: "bbake14@census.gov",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Getafe",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Ezra Towse",
          email: "etowse15@blogspot.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Getafe",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Hill Sleaford",
          email: "hsleaford16@zimbio.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Randee Rentcome",
          email: "rrentcome17@yahoo.co.jp",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Getafe",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Margette Gapper",
          email: "mgapper18@dropbox.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Tawnya Grzegorzewski",
          email: "tgrzegorzewski19@hud.gov",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Shirley Maidlow",
          email: "smaidlow1a@flickr.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Xenia Figures",
          email: "xfigures1b@icq.com",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Valencia",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Ferdy Domoney",
          email: "fdomoney1c@joomla.org",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Getafe",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
        {
          name: "Talia Yarnall",
          email: "tyarnall1d@icio.us",
          password: bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          rol: false,
          age: 18,
          surname: "Albacete",
          nickname: "usuario",
          createdAt: "2021-10-27",
          updatedAt: "2021-10-27",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
