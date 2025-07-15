import { AppColors } from "../components/Colors";

export interface ColorPresetFromAPI extends AppColors {
  id: number;
  name: string;
  userId: number;
}
