const { Museum, Artwork, Artist } = require('./models');

const main = async () => {
  const whitney = await Museum.findOne({
    where: {
      name: 'The Whitney Museum'
    }
  });

  const calder = await Artist.create({
    name: 'Alexander Calder'
  });

  const bigRed = await Artwork.create({
    title: 'Big Red',
    year: 1959,
    medium: 'Sheet metal and steel wire'
  });

  await bigRed.setArtist(calder);
  await bigRed.setMuseum(whitney);

  const abbot = await Artist.create({
    name: 'Berenice Abbott'
  });
 
  const buddyGilmore = await Artwork.create({
    title: 'Buddy Gilmore Paris',
    year: 1926,
    medium: 'Platinum print'
  });
 
  await buddyGilmore.setArtist(abbot);
  await buddyGilmore.setMuseum(whitney);

  const demuth = await Artist.create({
    name: 'Charles Demuth'
  });
  
  const myEgypt = await Artwork.create({
    title: 'My Egypt',
    year: 1927,
    medium: 'Oil Paint'
  });
  
  await myEgypt.setArtist(demuth);
  await myEgypt.setMuseum(whitney);

  const keeffe = await Artist.create({
    name: 'Georgia O\'Keeffe'
  });
  
  const summerDays = await Artwork.create({
    title: 'Summer Days',
    year: 1936,
    medium: 'Oil on canvas'
  });
  
  await summerDays.setArtist(keeffe);
  await summerDays.setMuseum(whitney);

  const lozowick = await Artist.create({
    name: 'Louis Lozowick'
  });
  
  const strikeScene = await Artwork.create({
    title: 'Strike Scene',
    year: 1935,
    medium: 'Lithograph'
  });
  
  await strikeScene.setArtist(lozowick);
  await strikeScene.setMuseum(whitney);

  const ruscha = await Artist.create({
    name: 'Edward Ruscha'
  });
  
  const swank = await Artwork.create({
    title: 'Swank',
    year: 2001,
    medium: 'Spray-applied acrylic and dry pigment on board'
  });
  
  await swank.setArtist(ruscha);
  await swank.setMuseum(whitney); 

  const davidWojnarowicz = await Artist.create({
    name: 'David Wojnarowicz'
  });
  
  const burningHouse = await Artwork.create({
    title: 'Untitled (Burning House)',
    year: 1982,
    medium: 'Stencil and spray paint'
  });
  
  await burningHouse.setArtist(davidWojnarowicz);
  await burningHouse.setMuseum(whitney);
  
  const aitken  = await Artist.create({
    name: 'Doug Aitken'
  });
  
  const risingSun = await Artwork.create({
    title: 'Rising Sun',
    year: 2002,
    medium: 'Chromogenic print'
  });
  
  await risingSun.setArtist(aitken);
  await risingSun.setMuseum(whitney);  


  process.exit();

}

main();
