import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ubigeo } from 'src/app/models/ubigeo.model'; 

export function mapUbigeos(): OperatorFunction<any, Ubigeo[]> {
  return map((resp: { ok: boolean, departamentos: Ubigeo[] }) => resp.departamentos);
}
