import { Category } from "./category";
import { omit } from "lodash";

describe("Category unit tests", function() {
    test("should test constructor of Category", () => {
        // arrange
        const createdAt = new Date();
        const props = {
            name: "Movie", 
            description: "Avengers: Infinity War",
            isActive: true,
            createdAt,
        };
        // act
        let category = new Category(props);
        // assert
        expect(category.name).toBe("Movie");
        expect(category.description).toBe("Avengers: Infinity War");
        expect(category.isActive).toBeTruthy();
        expect(category.createdAt).toBe(createdAt);
        expect(category.properties).toStrictEqual(props);
    });

    test("should test constructor default values of Category", () => {
        let category = new Category({
            name: "Movie",
        });
        let props = omit(category.properties, 'createdAt');
        expect(category.name).toBe("Movie");
        expect(category.description).toBeNull;
        expect(category.isActive).toBeTruthy();
        expect(category.createdAt).toBeInstanceOf(Date);
        expect(category.createdAt.getDate()).toBe(new Date().getDate());
        expect(omit(category.properties, 'createdAt')).toStrictEqual(props);
    });

    test("should test isActive value of Category", () => {
        let category = new Category({
            name: "Movie",
            isActive: false,
        });
        expect(category.isActive).toBeFalsy();
    });

    test("should test required props of Category", () => {
        let error = new Error("Category name is required!");
        expect(() => {
            new Category({name: undefined});
        }).toThrow(error);

        expect(() => {
            new Category({name: null});
        }).toThrow(error);

        expect(() => {
            new Category({name: ''});
        }).toThrow(error);
        
        expect(() => {
            new Category({name: '    '});
        }).toThrow(error);  
    });

    test("should test Category is null or undefined", () => {
        expect(() => {
            new Category(null);
        }).toThrow(new Error("Category is null or undefined!"));
    });

    test("should test getter for name field of Category", () => {
        const category = new Category({ name: 'Movie' });
        expect(category.name).toBe('Movie');
    });

    test("should test getter for description field of Category", () => {
        const category = new Category({ name: 'Movie', description: "Avengers: Infinity War" });
        expect(category.description).toBe("Avengers: Infinity War");
    });

    test("should test getter for description field to null value of Category", () => {
        const category = new Category({ name: 'Movie', description: null });
        expect(category.description).toBeNull();
    });

    test("should test getter for isActive field to false of Category", () => {
        const category = new Category({ name: 'Movie', isActive: false });
        expect(category.isActive).toBeFalsy();
    });

    test("should test getter for isActive field to true of Category", () => {
        const category = new Category({ name: 'Movie', isActive: true });
        expect(category.isActive).toBeTruthy();
    });

    test("should test getter for createdAt field of Category", () => {
        const createdAt = new Date();
        const category = new Category({ name: 'Movie', createdAt });
        expect(category.createdAt).toBe(createdAt);
    });

    test("should test getter for createdAt field to a valid date of Category", () => {
        const createdAt: any = null;
        const category = new Category({ name: 'Movie', createdAt });
        expect(category.createdAt).toBeInstanceOf(Date);
        expect(category.createdAt.getDate()).toBe(new Date().getDate());
    });

    test("should test private setter for description field of Category", () => {
        const description = "Avengers: Infinity War";
        const category = new Category({ name: 'Movie' });
        category['description'] = description;
        expect(category.description).toBe(description)
    });

    test("should test private setter for description field undefined of Category", () => {
        const description = "Avengers: Infinity War";
        const category = new Category({ name: 'Movie' });
        category['description'] = undefined;
        expect(category.description).toBeNull();
    });
});