import type { MotionValue} from "framer-motion";
import { useSpring, useTransform} from "framer-motion";
import type {SpringOptions} from "popmotion";

export function useSmoothTransform(value: MotionValue<unknown>, springOptions: SpringOptions | undefined, transformer: { (v: any): number; (v: any): number; (x: any): number; (y: any): number; (input: unknown): any; }) {
  return useSpring(useTransform(value, transformer), springOptions);
}
