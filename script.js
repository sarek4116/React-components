var movies = [
    {
      id:1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      img: 'https://static.posters.cz/image/350/plakaty/harry-potter-7-trio-i11027.jpg'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      img: 'https://static4.redcart.pl/templates/images/thumb/9595/800/800/pl/0/templates/images/products/9595/124-33147_0.jpg'
    },
    {
      id: 3,
      title: 'Dragon Ball',
      desc: 'Najlepsze anime na świecie !',
      img: 'https://ssl-gfx.filmweb.pl/po/41/08/744108/7695894.3.jpg'
    },
    {
      id: 4,
      title: 'Shrek',
      desc: 'Bajka o ogrze',
      img: 'https://ssl-gfx.filmweb.pl/po/95/09/9509/7789171.3.jpg'
    }
  ];
  
  var movieTitle = React.createClass({
      propTypes:{
          movieTitles: React.PropTypes.string.isRequired
      },
      
    render: function() {
      return React.createElement('h2',{}, this.props.movieTitles)
    },
  });

  var movieDesc = React.createClass ({
    propTypes: {
      desc: React.PropTypes.string.isRequired
    },

    render: function () {
      return (
        React.createElement('p', {}, this.props.desc)
      )
    }
  });


  var movieImg = React.createClass ({
    propTypes: {
      imgSrc: React.PropTypes.string.isRequired
    },

    render: function() {
      return  React.createElement('img', {src: this.props.imgSrc});
    }
  });

  var movieList = React.createClass ({
    render: function () {
      var moviesElements = movies.map (function(movie) {
        return React.createElement(Movie, {key:movie.id, movie:movie})
    });
    return React.createElement('div', {}),
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  }
})
    

  var Movie = React.createClass({
      propTypes: {
          movie: React.PropTypes.object.isRequired,
      },

    render: function() {
      
        return React.createElement('li', {},
        React.createElement(movieTitle, {movieTitles: this.props.movie.title}),
        React.createElement(movieImg,{imgSrc: this.props.movie.img}),
        React.createElement(movieDesc, {desc: this.props.movie.desc},))
    }});

  var element = React.createElement(movieList);

  ReactDOM.render(element, document.getElementById('app'));



