export interface Meal {
  id: string;
  title: string;
  description: string;
  category: string;
  recipe_link: string;
  difficulty: number;
  rating: number;
  cost: number;
}

export type InitMeal = Omit<Meal, "id">;
