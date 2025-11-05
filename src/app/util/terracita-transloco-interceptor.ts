import { HttpInterceptorFn } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Translation, TranslocoInterceptor } from '@ngneat/transloco';
@Injectable({providedIn: 'root'})
export class terracitaTranslocoInterceptor implements TranslocoInterceptor{
  preSaveTranslation(translation: any, lang: string): any {
    return translation;
  }
  preSaveTranslationKey(key: string, value: string, lang: string): string {
    return key;
  }
  intercept(translation: any, lang: string): any{
    return translation;
  }
};
