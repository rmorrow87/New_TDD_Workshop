import { Movie, Customer, addMovie } from "./MovieStore";

describe("Movie Store", () => {
  test("rentMovie() should set inStock to false for a movie", () => {
    let movie1 = new Movie("Top Gun");
    let movie2 = new Movie("Titanic");

    movie1.rentMovie();

    expect(movie1.inStock).toBe(false);
    expect(movie2.inStock).toBe(true);
  });

  test("rentMovie() should add a movie to a customers rentals", () => {
    let testMovie = new Movie("Avatar");
    let testCustomer = new Customer("Bobby Joe");
    testCustomer.rentMovie(testMovie);

    expect(testCustomer.rentals).toContain(testMovie);
  });

  // rentMovie(movie: Movie) {
  //   if (movie.inStock === true) {
  //     this.rentals.push(movie);
  //     movie.incrementDaysRented();
  //   } else {
  //     return "Movie out of stock.";
  //   }
  // }

  test("rentMovie should check for inStock before renting the movie to the customer", () => {
    let testMovie = new Movie("Avatar");
    let testCustomer = new Customer("Bobby Joe");

    testMovie.rentMovie();
    expect(testCustomer.rentMovie(testMovie)).toEqual("Movie out of stock.");
  });

  test("addMovie() should add a movie to the inventory array", () => {
    let newMovie = new Movie("Rambo");
    addMovie(newMovie);

    expect(newMovie.inStock).toBe(true);
  });

  test("calculateRentalFees should return the total cost of a customers rentals", () => {
    let newMovie = new Movie("Rambo");
    let testCustomer = new Customer("Bobby Joe");

    addMovie(newMovie);
    testCustomer.rentMovie(newMovie);

    expect(testCustomer.calculateRentalFees()).toEqual(1);
  });
});
