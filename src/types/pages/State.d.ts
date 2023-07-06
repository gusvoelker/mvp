export interface Meal {
  id: number;
  title: string;
  description: string;
  category: string;
  recipe_link: string;
  difficulty: number;
  rating: number;
  cost: number;
}

export interface CMeal {
  date: string;
  meal: Meal;
}

export type InitMeal = Omit<Meal, "id">;
