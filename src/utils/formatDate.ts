import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const getDistance = (date: string | Date) => {
  return formatDistance(new Date(), new Date(date), {
    locale: ptBR,
  });
};
