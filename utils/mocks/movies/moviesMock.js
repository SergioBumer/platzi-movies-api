const moviesMocks = [{
    "id": 1,
    "first_name": "Correy",
    "last_name": "Merrell",
    "email": "cmerrell0@angelfire.com",
    "gender": "Genderfluid",
    "ip_address": "157.169.130.169"
}, {
    "id": 2,
    "first_name": "Julietta",
    "last_name": "Bande",
    "email": "jbande1@oracle.com",
    "gender": "Polygender",
    "ip_address": "148.45.117.90"
}, {
    "id": 3,
    "first_name": "Jessy",
    "last_name": "Eat",
    "email": "jeat2@upenn.edu",
    "gender": "Polygender",
    "ip_address": "145.109.132.155"
}, {
    "id": 4,
    "first_name": "Meier",
    "last_name": "Sergeaunt",
    "email": "msergeaunt3@google.fr",
    "gender": "Bigender",
    "ip_address": "189.236.62.8"
}, {
    "id": 5,
    "first_name": "Coletta",
    "last_name": "Pinckney",
    "email": "cpinckney4@vistaprint.com",
    "gender": "Female",
    "ip_address": "162.36.98.250"
}, {
    "id": 6,
    "first_name": "Donaugh",
    "last_name": "De Avenell",
    "email": "ddeavenell5@163.com",
    "gender": "Polygender",
    "ip_address": "50.216.249.7"
}, {
    "id": 7,
    "first_name": "Ursala",
    "last_name": "Dennidge",
    "email": "udennidge6@msu.edu",
    "gender": "Genderqueer",
    "ip_address": "238.54.109.108"
}, {
    "id": 8,
    "first_name": "Michaeline",
    "last_name": "Morforth",
    "email": "mmorforth7@newyorker.com",
    "gender": "Genderqueer",
    "ip_address": "16.219.65.59"
}, {
    "id": 9,
    "first_name": "Evangelina",
    "last_name": "Braunston",
    "email": "ebraunston8@ehow.com",
    "gender": "Male",
    "ip_address": "203.101.192.83"
}, {
    "id": 10,
    "first_name": "Kristoffer",
    "last_name": "Giberd",
    "email": "kgiberd9@facebook.com",
    "gender": "Female",
    "ip_address": "104.197.0.95"
}, {
    "id": 11,
    "first_name": "Ludvig",
    "last_name": "McVrone",
    "email": "lmcvronea@sogou.com",
    "gender": "Male",
    "ip_address": "160.100.213.181"
}, {
    "id": 12,
    "first_name": "Randi",
    "last_name": "Dredge",
    "email": "rdredgeb@amazon.co.uk",
    "gender": "Non-binary",
    "ip_address": "255.80.108.165"
}, {
    "id": 13,
    "first_name": "Constanta",
    "last_name": "Legrave",
    "email": "clegravec@nasa.gov",
    "gender": "Non-binary",
    "ip_address": "130.55.59.159"
}, {
    "id": 14,
    "first_name": "Marin",
    "last_name": "D'Alesio",
    "email": "mdalesiod@cam.ac.uk",
    "gender": "Bigender",
    "ip_address": "72.86.165.97"
}, {
    "id": 15,
    "first_name": "Gilbertina",
    "last_name": "Buckles",
    "email": "gbucklese@salon.com",
    "gender": "Agender",
    "ip_address": "200.172.222.70"
}, {
    "id": 16,
    "first_name": "Letti",
    "last_name": "Compfort",
    "email": "lcompfortf@umich.edu",
    "gender": "Agender",
    "ip_address": "230.66.54.52"
}, {
    "id": 17,
    "first_name": "Rennie",
    "last_name": "Kline",
    "email": "rklineg@marketwatch.com",
    "gender": "Genderqueer",
    "ip_address": "40.19.134.122"
}, {
    "id": 18,
    "first_name": "Roderick",
    "last_name": "Lemasney",
    "email": "rlemasneyh@cmu.edu",
    "gender": "Female",
    "ip_address": "172.179.37.136"
}, {
    "id": 19,
    "first_name": "Lura",
    "last_name": "Corzon",
    "email": "lcorzoni@tuttocitta.it",
    "gender": "Bigender",
    "ip_address": "185.9.18.1"
}, {
    "id": 20,
    "first_name": "Violet",
    "last_name": "Letherbury",
    "email": "vletherburyj@ustream.tv",
    "gender": "Genderfluid",
    "ip_address": "179.64.122.88"
}];

function filteredMovies(gender) {
    return moviesMocks.filter(movie => movie.gender == gender);
}

class MoviesServiceMock {
    async getMovies() {
        Promise.resolve(moviesMocks);
    }

    async createMovie() {
        Promise.resolve(moviesMocks[0]);
    }
}

module.exports = { moviesMocks, filteredMovies, MoviesServiceMock };