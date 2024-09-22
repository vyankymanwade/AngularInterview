import { InjectionToken } from "@angular/core";
import { ILogger } from "./ILogger";

export const LOGGER_INJECTION_TOKEN = new InjectionToken<ILogger>('LOGGER_SERVICE_TOKEN');