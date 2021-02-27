import React, { Component, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, DetailJob, MyJob } from './pages'
import Header from './component/Header'
import { tour1, tour11, tour2, tour22, tour3, tour33 } from './images'
import 'bootstrap/dist/css/bootstrap.min.css';


export const RootContext = createContext();
const Provider = RootContext.Provider;


class App extends Component {
  constructor(props) {
    super(props);
    this.applyJob = this.applyJob.bind(this);
    this.state = {
      detailIndex: 2,
      myJob: [],
      user: [
        {
          username: "fadlil",
          password: "password",
          admin: false
        }  
      ],
      tourList: [
          {
              id: 1,
              tourName: "EXPLORE ROVANIEMI SANTA CLAUS VILLAGE",
              download: "/files/rovaniemi.pdf",
              periodes: "Periode : 25 Oct / 08, 22 Nov / 06 Dec 2019 / 06 Jan / 10 , 24 Feb / 06, 20 Mar 2020",
              periode: "25 Oct - 04 Nov 2019",
              totalDays: "10 Hari 8 Malam",
              totalPax: 60,
              route: "JAKARTA - ROVANIEMI - JAKARTA",
              tourLeaderFee: "USD 90/Day",
              location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809094.0015025735!2d24.911002615390224!3d66.66705116750457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x442b4bbd76772553%3A0x158088adb48841c4!2sRovaniemi%2C%20Finland!5e0!3m2!1sen!2sid!4v1614357679803!5m2!1sen!2sid",
              image: tour1,
              panorama: tour11,
              itinerary: [
                  {
                      day: 1,
                      route: "BERKUMPUL DI BANDARA SOEKARNO-HATTA, JAKARTA",
                      detail: "Hari ini Anda diharapkan berkumpul di Bandara Soekarno Hatta, Jakarta untuk penerbangan menuju kota Helsinki."
                  },
                  {
                      day: 2,
                      route: "HELSINKI",
                      detail: "Setibanya di Helsinki, Anda akan diantar dengan menggunakan kapal ferry menuju Helskini. Setibanya, Anda akan diajak untuk nikmati keindahan dan ketenangan kotanya melalui Senate Square, alun-alun kota utama dimana terdapat Helsinki Cathedral yang merupakan ikon kota Helsinki dan Parliament House. Selanjutnya, Sibelius Monument untuk mengenang komposer kenamaan Finlandia. Kemudian Anda dapat menikmati acara bebas untuk membeli souvenir atau penganan khas di Market Square"
                  },
                  {
                      day: 3,
                      route: "HELSINKI – ROVANIEMI",
                      detail: "Hari ini merupakan acara bebas Tidak disediakan transportasi. Malam hari Anda akan diantar menuju Stasiun untuk diantar menuju Rovaniemi , Ibukota Laplan dengan bermalam kereta."
                  },
                  {
                      day: 4,
                      route: "ROVANIEMI (SANTA CLAUS VILLAGE)",
                      detail: "Setibanya di Rovaniemi, Anda akan diantar menuju Santa Claus Village, tempat dimana Anda dapat foto bersama Santa Claus, juga mengirimkan postcard dengan cap post kutub utara di kantor pos natal. Dan sebagai hadiahnya, Anda akan mendapatkan sertifikat khusus karena telah menginjakkan kaki di benua paling utara di bumi. Dan Anda bisa mengikuti acara tambahan (optional) mengendarai Husky Sledge (kereta yang ditarik anjing Husky)."
                  },
                  {
                      day: 5,
                      route: "ROVANIEMI (FREE PROGRAM)",
                      detail: "Hari ini merupakan acara bebas Tidak disediakan transportasi, Anda bisa mengikuti acara tambahan (optional) mengendarai Snow Mobile atau Reindeer Ride (kereta yang ditarik Rusa Kutub)."
                  },
                  {
                      day: 6,
                      route: "ROVANIEMI – KAKSLAUTTANEN – SAARISELAKA",
                      detail: "Hari ini Anda akan dimanjakan dengan minuman hangat khas Finladia dan Anda akan diajakmelihat rumah tradisional Igloo di kota Kakslauttanen. Dilanjutkan menuju kota Saariselka atau sekitarnya untuk berisitirahat."
                  },
                  {
                      day: 7,
                      route: "BERKUMPUL DI BANDARA SOEKARNO-HATTA, JAKARTA",
                      detail: "Hari ini Anda diharapkan berkumpul di Bandara Soekarno Hatta, Jakarta untuk penerbangan menuju kota Helsinki."
                  },
                  {
                      day: 8,
                      route: "HELSINKI – TALLINN",
                      detail: "Setibanya di Helsinki, Anda akan diantar menuju kota Tallin, Estonia dengan naik ferry. Setibanya, Anda akan diajak city tour dengan mengunjungi Old Town yang merupakan kota warisan budaya UNESCO. Anda juga akan melewati Viru Gate, Viru Street dan City Hall. Kemudian menuju Toompea Hill untuk melihat pemandangan indah dari kota ini. Kemudian berfoto di Toompea Castle yang sekarang digunakan sebagai gedung parlemen."
                  },
                  {
                      day: 9,
                      route: "BERKUMPUL DI BANDARA SOEKARNO-HATTA, JAKARTA",
                      detail: "Hari ini Anda diharapkan berkumpul di Bandara Soekarno Hatta, Jakarta untuk penerbangan menuju kota Helsinki."
                  },
                  {
                      day: 10,
                      route: "TIBA DI JAKARTA",
                      detail: "Tiba di Jakarta di tanah air tercinta. Dengan ini, acara tour Anda bersama Kami selesai sudah. Kami harap Anda mendapatkan kenangan terindah bersama dan sampai jumpa di kesempatan lainnya."
                  }
              ]
          },
          {
              id: 2,
              tourName: "Singapore Malaysia 2 Country Overland",
              download: "/files/singapore.pdf",
              periodes: "Periode : 17 Jan / 04 Feb / 10 Mar / 16 Apr 2020",
              periode: "17 - 20 Jan 2020",
              totalDays: "3 Hari 2 Malam",
              totalPax: 120,
              route: "JAKARTA - SINGAPORE - JAKARTA",
              tourLeaderFee: "USD 50/Day",
              location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.1903627398!2d103.70416526649272!3d1.3143393783889195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2sid!4v1614366116190!5m2!1sen!2sid",
              image: tour2,
              panorama: tour22,
              itinerary: [
                  {
                      day: 1,
                      route: "BERKUMPUL DI BANDARA SOEKARNO-HATTA, JAKARTA",
                      detail: "Hari ini Anda diharapkan berkumpul di Bandara Soekarno Hatta, Jakarta untuk penerbangan menuju kota Helsinki."
                  },
                  {
                      day: 2,
                      route: "HELSINKI",
                      detail: "Setibanya di Helsinki, Anda akan diantar dengan menggunakan kapal ferry menuju Helskini. Setibanya, Anda akan diajak untuk nikmati keindahan dan ketenangan kotanya melalui Senate Square, alun-alun kota utama dimana terdapat Helsinki Cathedral yang merupakan ikon kota Helsinki dan Parliament House. Selanjutnya, Sibelius Monument untuk mengenang komposer kenamaan Finlandia. Kemudian Anda dapat menikmati acara bebas untuk membeli souvenir atau penganan khas di Market Square"
                  },
                  {
                      day: 3,
                      route: "HELSINKI – ROVANIEMI",
                      detail: "Hari ini merupakan acara bebas Tidak disediakan transportasi. Malam hari Anda akan diantar menuju Stasiun untuk diantar menuju Rovaniemi , Ibukota Laplan dengan bermalam kereta."
                  },
                  {
                      day: 4,
                      route: "ROVANIEMI (SANTA CLAUS VILLAGE)",
                      detail: "Setibanya di Rovaniemi, Anda akan diantar menuju Santa Claus Village, tempat dimana Anda dapat foto bersama Santa Claus, juga mengirimkan postcard dengan cap post kutub utara di kantor pos natal. Dan sebagai hadiahnya, Anda akan mendapatkan sertifikat khusus karena telah menginjakkan kaki di benua paling utara di bumi. Dan Anda bisa mengikuti acara tambahan (optional) mengendarai Husky Sledge (kereta yang ditarik anjing Husky)."
                  },
                  {
                      day: 5,
                      route: "ROVANIEMI (FREE PROGRAM)",
                      detail: "Hari ini merupakan acara bebas Tidak disediakan transportasi, Anda bisa mengikuti acara tambahan (optional) mengendarai Snow Mobile atau Reindeer Ride (kereta yang ditarik Rusa Kutub)."
                  },
                  {
                      day: 6,
                      route: "ROVANIEMI – KAKSLAUTTANEN – SAARISELAKA",
                      detail: "Hari ini Anda akan dimanjakan dengan minuman hangat khas Finladia dan Anda akan diajakmelihat rumah tradisional Igloo di kota Kakslauttanen. Dilanjutkan menuju kota Saariselka atau sekitarnya untuk berisitirahat."
                  },
                  {
                      day: 7,
                      route: "BERKUMPUL DI BANDARA SOEKARNO-HATTA, JAKARTA",
                      detail: "Hari ini Anda diharapkan berkumpul di Bandara Soekarno Hatta, Jakarta untuk penerbangan menuju kota Helsinki."
                  },
                  {
                      day: 8,
                      route: "HELSINKI – TALLINN",
                      detail: "Setibanya di Helsinki, Anda akan diantar menuju kota Tallin, Estonia dengan naik ferry. Setibanya, Anda akan diajak city tour dengan mengunjungi Old Town yang merupakan kota warisan budaya UNESCO. Anda juga akan melewati Viru Gate, Viru Street dan City Hall. Kemudian menuju Toompea Hill untuk melihat pemandangan indah dari kota ini. Kemudian berfoto di Toompea Castle yang sekarang digunakan sebagai gedung parlemen."
                  },
                  {
                      day: 9,
                      route: "BERKUMPUL DI BANDARA SOEKARNO-HATTA, JAKARTA",
                      detail: "Hari ini Anda diharapkan berkumpul di Bandara Soekarno Hatta, Jakarta untuk penerbangan menuju kota Helsinki."
                  },
                  {
                      day: 10,
                      route: "TIBA DI JAKARTA",
                      detail: "Tiba di Jakarta di tanah air tercinta. Dengan ini, acara tour Anda bersama Kami selesai sudah. Kami harap Anda mendapatkan kenangan terindah bersama dan sampai jumpa di kesempatan lainnya."
                  }
              ]
          },
          {
              id: 3,
              download: "/files/turkey.pdf",
              tourName: "Magnificent Turkey Cappadocia",
              periodes: "Periode : 17 Jan / 04 Feb / 10 Mar / 16 Apr 2020",
              periode: "20 – 27 Mar '20",
              totalDays: "8 Hari 6 Malam",
              totalPax: 55,
              route: "JAKARTA - TURKEY - JAKARTA",
              tourLeaderFee: "USD 50/Day",
              location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6349270.921063913!2d30.688550329139233!3d39.010067878037894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2sTurkey!5e0!3m2!1sen!2sid!4v1614366349772!5m2!1sen!2sid",
              image: tour3,
              panorama: tour33,
              itinerary: [
                  {
                      day: 1,
                      route: "BERKUMPUL DI BANDARA SOEKARNO-HATTA, JAKARTA",
                      detail: "Hari ini Anda diharapkan berkumpul di Bandara Soekarno Hatta, Jakarta untuk penerbangan menuju kota Helsinki."
                  },
                  {
                      day: 2,
                      route: "HELSINKI",
                      detail: "Setibanya di Helsinki, Anda akan diantar dengan menggunakan kapal ferry menuju Helskini. Setibanya, Anda akan diajak untuk nikmati keindahan dan ketenangan kotanya melalui Senate Square, alun-alun kota utama dimana terdapat Helsinki Cathedral yang merupakan ikon kota Helsinki dan Parliament House. Selanjutnya, Sibelius Monument untuk mengenang komposer kenamaan Finlandia. Kemudian Anda dapat menikmati acara bebas untuk membeli souvenir atau penganan khas di Market Square"
                  },
                  {
                      day: 3,
                      route: "HELSINKI – ROVANIEMI",
                      detail: "Hari ini merupakan acara bebas Tidak disediakan transportasi. Malam hari Anda akan diantar menuju Stasiun untuk diantar menuju Rovaniemi , Ibukota Laplan dengan bermalam kereta."
                  },
                  {
                      day: 4,
                      route: "ROVANIEMI (SANTA CLAUS VILLAGE)",
                      detail: "Setibanya di Rovaniemi, Anda akan diantar menuju Santa Claus Village, tempat dimana Anda dapat foto bersama Santa Claus, juga mengirimkan postcard dengan cap post kutub utara di kantor pos natal. Dan sebagai hadiahnya, Anda akan mendapatkan sertifikat khusus karena telah menginjakkan kaki di benua paling utara di bumi. Dan Anda bisa mengikuti acara tambahan (optional) mengendarai Husky Sledge (kereta yang ditarik anjing Husky)."
                  },
                  {
                      day: 5,
                      route: "ROVANIEMI (FREE PROGRAM)",
                      detail: "Hari ini merupakan acara bebas Tidak disediakan transportasi, Anda bisa mengikuti acara tambahan (optional) mengendarai Snow Mobile atau Reindeer Ride (kereta yang ditarik Rusa Kutub)."
                  },
                  {
                      day: 6,
                      route: "ROVANIEMI – KAKSLAUTTANEN – SAARISELAKA",
                      detail: "Hari ini Anda akan dimanjakan dengan minuman hangat khas Finladia dan Anda akan diajakmelihat rumah tradisional Igloo di kota Kakslauttanen. Dilanjutkan menuju kota Saariselka atau sekitarnya untuk berisitirahat."
                  },
                  {
                      day: 7,
                      route: "BERKUMPUL DI BANDARA SOEKARNO-HATTA, JAKARTA",
                      detail: "Hari ini Anda diharapkan berkumpul di Bandara Soekarno Hatta, Jakarta untuk penerbangan menuju kota Helsinki."
                  },
                  {
                      day: 8,
                      route: "HELSINKI – TALLINN",
                      detail: "Setibanya di Helsinki, Anda akan diantar menuju kota Tallin, Estonia dengan naik ferry. Setibanya, Anda akan diajak city tour dengan mengunjungi Old Town yang merupakan kota warisan budaya UNESCO. Anda juga akan melewati Viru Gate, Viru Street dan City Hall. Kemudian menuju Toompea Hill untuk melihat pemandangan indah dari kota ini. Kemudian berfoto di Toompea Castle yang sekarang digunakan sebagai gedung parlemen."
                  },
                  {
                      day: 9,
                      route: "BERKUMPUL DI BANDARA SOEKARNO-HATTA, JAKARTA",
                      detail: "Hari ini Anda diharapkan berkumpul di Bandara Soekarno Hatta, Jakarta untuk penerbangan menuju kota Helsinki."
                  },
                  {
                      day: 10,
                      route: "TIBA DI JAKARTA",
                      detail: "Tiba di Jakarta di tanah air tercinta. Dengan ini, acara tour Anda bersama Kami selesai sudah. Kami harap Anda mendapatkan kenangan terindah bersama dan sampai jumpa di kesempatan lainnya."
                  }
              ]
          }
      ]
    }
  }

  setDetailIndex = (index) => {
    return this.setState({ detailIndex: index })
  }

  applyJob = (index) => {
    if (window.confirm("Apa anda yakin akan apply pekerjaan ini?")) {
      let found;
      for(let i = 0; i < this.state.myJob.length; i++) {
        if(this.state.myJob[i].id === this.state.tourList[index].id) {
          found = true
          window.alert("job yang sama telah di apply sebelumnya")
          break
        } else {
          found = false
        }
      }

      if(!found) {
        let currentJob = [...this.state.myJob]
        let pushJob = {...this.state.tourList[index]}
        currentJob.push(pushJob)
        return this.setState({ myJob: currentJob })
      }
    }    
  }


  render() { 
    return (  
      <Router>
        <Provider value={
          {
            state: this.state,
            setDetailIndex: this.setDetailIndex,
            applyJob: this.applyJob
          }
        }>
          <Switch>
            <Route path="/home">
              <Header />
              <Home />
            </Route>
            <Route path="/detail">
              <Header />
              <DetailJob />
            </Route>
            <Route path="/myjob">
              <Header />
              <MyJob />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Provider>
      </Router>
    );
  }
}
 
export default App;
