const Juice = require('../models/juiceModel');

// exports.getIndex = (req, res, next) => {
//     Juice.find()
//       .then(juiceData => {
//         res.render('user/index', {
//           juiceData: juiceData,
//           pageTitle: 'Home Page'          
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };





  exports.getIndex = (req, res, next) => {
    res.render('user/index', {        
        pageTitle: 'Home Page',
        isAuthenticated: req.session.isLoggedIn          
      })     
  };

  // exports.getCasual = (req, res, next) => {
  //   res.render('user/casual', {        
  //       pageTitle: 'Casual Juices'          
  //     })     
  // };

  exports.getCasual = (req, res, next) => {
    Juice.find({ category: 'Casual'})
      .then(juiceDataBlocks => {
        console.log(juiceDataBlocks);
        res.render('user/casual', {
          juiceDataBlocks: juiceDataBlocks,
          pageTitle: 'Casual Juices',
          isAuthenticated: req.session.isLoggedIn
        });
      })
      .catch(err => {
        console.log(err);
      });
  };


  // exports.getWeightloss = (req, res, next) => {
  //   res.render('user/weightloss', {        
  //       pageTitle: 'Weightloss Juices'          
  //     })
  //      };

  exports.getWeightloss = (req, res, next) => {
    Juice.find({ category: 'Weightloss'})
      .then(juiceDataBlocks => {
        console.log(juiceDataBlocks);
        res.render('user/weightloss', {
          juiceDataBlocks: juiceDataBlocks,
          pageTitle: 'Weightloss Juices',
          isAuthenticated: req.session.isLoggedIn
        });
      })
      .catch(err => {
        console.log(err);
      });
  };



  // exports.getAthlete = (req, res, next) => {
  //   res.render('user/athlete', {        
  //       pageTitle: 'Athlete Juices'          
  //     })      
  //   };

  exports.getAthlete = (req, res, next) => {
    Juice.find({ category: 'Athlete'})
      .then(juiceDataBlocks => {
        console.log(juiceDataBlocks);
        res.render('user/athlete', {
          juiceDataBlocks: juiceDataBlocks,
          pageTitle: 'Athlete Juices',
          isAuthenticated: req.session.isLoggedIn
        });
      })
      .catch(err => {
        console.log(err);
      });
  };


  // exports.getHealth = (req, res, next) => {
  //   res.render('user/health', {        
  //       pageTitle: 'Health Juices'          
  //     })     
  // };


  exports.getHealth = (req, res, next) => {
    Juice.find({ category:'Health'})
      .then(juiceDataBlocks => {
        console.log(juiceDataBlocks);
        res.render('user/health', {
          juiceDataBlocks: juiceDataBlocks,
          pageTitle: 'Athlete Juices',
          isAuthenticated: req.session.isLoggedIn
        });
      })
      .catch(err => {
        console.log(err);
      });
  };



  exports.getaddJuice = (req, res, next) => {
    res.render('user/addJuice', {        
        pageTitle: 'Database Update Page'          
      })     
  };

  exports.postAddJuice = (req, res, next) => {
    const name= req.body.name;
    const mainContent = req.body.mainContent;
    const description = req.body.description;
    const category = req.body.category;
    const imageUrl = req.body.imageUrl;
    const content = req.body.content;
    const benefit = req.body.benefit;
    const juiceDataInput = new Juice({
      name: name,
      mainContent: mainContent,
      category: category,
      imageUrl: imageUrl,
      benefit: benefit,
      description: description,
      content: content
    });
    juiceDataInput
      .save()
      .then(result => {
        // console.log(result);
        console.log('Created Juice loaded to Database');
        res.redirect('/addJuice');
      })
      .catch(err => {
        console.log(err);
      });
  };

  


