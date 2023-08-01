import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export class ValidationService {
  /**
   * Gestionar los mensajes
   */
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config:any = {
      desdeMenorHasta: 'La fecha inicial debe ser mayor a la final',
      required: 'Requerido',
      invalidCreditCard: 'Is invalid credit card number',
      invalidEmailAddress: 'Invalid email address',
      invalidPassword: 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      minlength: `Longitud Mínima ${validatorValue.requiredLength}`,
      maxlength: `Longitud Máxima ${validatorValue.requiredLength}`,
      soloNumeros: 'No se admiten caracteres',
      latitud: 'Formato: -##.#######',
      longitud: 'Formato: -##.#######',
      menorEstrictoA: 'El primer valor no puede ser igual o superior al segundo',
      min: `El número debe ser mayor a ${validatorValue.min}`,
      noEsObjeto: 'Seleccione un item de la lista',
    };

    return config[validatorName];
  }

  /** --------------------------------------------------------------------------
   * VALIDADORES COMPUESTOS
   * Metodo para capturar el error:
   * <mat-error *ngIf="ejemploForm.errors?.desdeMenorHasta">
   *         La fecha inicial no puede ser mayor a la final
   * </mat-error>
   *
   * ---------------------------------------------------------------------------  */

  /**
   * Verifica que haya seleccionado un objeto de la lista de objetos. Se usa en los autocomplete.
   * Metodos para mostrar el error:
   *  1. <app-control-messages [control]="form.controls?.campo"></app-control-messages>
   *  2. <mat-error *ngIf="form.errors?.esObjeto"> Seleccione el item de la lista. </mat-error>
   *
   * @param control
   * @returns
   */
  static esObjeto(control: AbstractControl) {
    if (!control.value) {
      return { noEsObjeto: true };
    }
    if (typeof control.value === 'string') {
      return { noEsObjeto: true };
    }
    if (control.value) {
      const keys = Object.keys(control.value);
      if (keys.length > 0) {
        return null;
      } else {
        return { noEsObjeto: true };
      }
    } else {
      return { noEsObjeto: true };
    }
  }
  /**
   * Verifica que haya seleccionado un objeto de la lista de objetos. Se usa en los autocomplete.
   * Metodos para mostrar el error:
   *  1. <app-control-messages [control]="form.controls?.campo"></app-control-messages>
   *  2. <mat-error *ngIf="form.errors?.esObjeto"> Seleccione el item de la lista. </mat-error>
   *
   * @param control
   * @returns
   */
  static esObjetoOrNull(control: AbstractControl) {
    if (!control.value) {
      return null;
    }
    if (typeof control.value === 'string') {
      return { noEsObjeto: true };
    }
    if (control.value) {
      const keys = Object.keys(control.value);
      if (keys.length > 0) {
        return null;
      } else {
        return { noEsObjeto: true };
      }
    } else {
      return { noEsObjeto: true };
    }
  }
  /**
   * Verifica que una fecha sea menor a otra
   *
   * @param desde
   * @param hasta
   */
  static desdeMenorHasta(desde: string, hasta: string) {
    return (group: FormGroup): { [key: string]: any } => {
      // if ( group.controls.value == null) {
      //     return null;
      // }
      const f = group.controls[desde];
      const t = group.controls[hasta];
      if (!f || f.value == null) {
        return {};
      }
      if (!t || t.value == null) {
        return {};
      }
      // if ((date1 !== null && date2 !== null) && date1 > date2) {
      if (f.value > t.value) {
        return { desdeMenorHasta: true };
      }
      return {};
    };
  }
  /**
   * Verifica que un numero sea menor a otro
   * arg0<arg1
   */
  static menorEstrictoA(arg0: string, arg1: string) {
    return (group: FormGroup): { [key: string]: any } => {
      const vUno = group.controls[arg0];
      const vDos = group.controls[arg1];
      if (vUno.value >= vDos.value) {
        return { menorEstrictoA: true };
      }
      return {};
    };
  }
  /**
   * Verifica que la diferencia entre dos fechas no sea mayor a 2 dias.
   *
   * @param desde
   * @param hasta
   */
  static restriccionFecha(desde: string, hasta: string) {
    return (group: FormGroup): { [key: string]: any } => {
      const d = group.controls[desde].value.clone();
      const h = group.controls[hasta].value.clone();
      if (h >= d.add(2, 'days')) {
        return {
          fechas: '* El rango de fechas no puede ser mayor a 2 días',
        };
      }
      return {};
    };
  }

  /**  --------------------------------------------------------------------------
   *
   *   VALIDADORES DE CONTROL
   *   METODO PARA CAPTURAR EL ERROR
   *   <app-control-messages [control]="ejemploForm.controls.ejemploCampo"></app-control-messages>
   *
   * --------------------------------------------------------------------------  */
  static latitud(control: AbstractControl) {
    if (!control.value) {
      return null;
    }
    // En el caso de usar valores positivos /^-?...
    if (control.value.toString().match(/^([-+]?)[0-9]{1,3}(\.)(?:[0-9]{1,15})$/)) {
      return null;
    } else {
      return { latitud: true };
    }
  }
  static longitud(control: AbstractControl) {
    if (!control.value) {
      return null;
    }
    if (control.value.toString().match(/^([-+]?)[0-9]{1,3}(\.)(?:[0-9]{1,15})$/)) {
      return null;
    } else {
      return { longitud: true };
    }
  }
  static coordenadas(control: AbstractControl) {
    if (!control.value) {
      return null;
    }
    if (control.value.toString().match(/^([-+]?)[0-9]{1,3}(\.)(?:[0-9]{1,7}),([-+]?)[0-9]{1,3}(\.)(?:[0-9]{1,7})$/)) {
      return null;
    } else {
      return { coordenadas: true };
    }
  }
  static soloNumeros(control: AbstractControl) {
    if (!control.value) {
      return null;
    }
    if (control.value.match('^[0-9]*$')) {
      return null;
    } else {
      return { soloNumeros: true };
    }
  }
  /**
   * Ejemplo
   *
   * @param control
   */
  static creditCardValidator(control:any) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (!control.value) {
      return null;
    }
    if (
      control.value.match(
        /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
      )
    ) {
      return null;
    } else {
      return { invalidCreditCard: true };
    }
  }
  /**
   * Ejemplo
   *
   * @param control
   */
  static emailValidator(control:any) {
    // RFC 2822 compliant regex
    if (!control.value) {
      return null;
    }
    if (
      control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }
  /**
   * Ejemplo
   *
   * @param control
   */
  static passwordValidator(control:any) {
    if (!control.value) {
      return null;
    }
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }
  static alMenosUnItemEnElArreglo(control: AbstractControl) {
    if (!control.value) {
      return { alMenosUnItemEnElArreglo: true };
    }
    if (control.value.length > 0) {
      return null;
    } else {
      return { alMenosUnItemEnElArreglo: true };
    }
  }
}
