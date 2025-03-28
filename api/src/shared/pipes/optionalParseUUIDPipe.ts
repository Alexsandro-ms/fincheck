import { ArgumentMetadata, ParseUUIDPipe } from '@nestjs/common';

export class OptionalParseUUIDPipe extends ParseUUIDPipe {
  override transform(value: string, metadata: ArgumentMetadata) {
    if (typeof value === 'undefined') {
      return Promise.resolve(value);
    }
    return super.transform(value, metadata);
  }
}
