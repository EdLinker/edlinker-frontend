import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, retryWhen } from 'rxjs/operators';

const getErrorMessage = () => `Помилка при відправленні`;

const DEFAULT_MAX_RETRIES = 5;

export const delayedRetry = (delayMs: number, maxRetry = DEFAULT_MAX_RETRIES) => {
    let retries = maxRetry;

    return (src: Observable<any>) =>
    src.pipe(
        retryWhen((errors: Observable<any>) => errors.pipe(
            delay(delayMs),
            mergeMap(error => retries-- > 0 ? of(error): throwError(getErrorMessage()))
        ))
    );
};
