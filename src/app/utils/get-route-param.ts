import { inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

export function getRouteParam(param: string): string {
  const activatedRoute = inject(ActivatedRoute);
  return activatedRoute.snapshot.params[param];
}
