type UserType = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserType>): UserType {
  const userData: UserType = {
    name: "Bob",
    surname: "Pikachu",
    email: "pikapika@meta.ua",
    password: "9379992",
  };

  return { ...userData, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

export {};
