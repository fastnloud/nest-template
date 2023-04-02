## Description

Template module for Nest that uses Handlebars to render templates.

## Installation

```bash
$ npm i --save @fastnloud/nest-template
```

## Setup

Import module:

```ts
import { TemplateModule } from '@fastnloud/nest-template';
import { Module } from '@nestjs/common';
import * as path from 'path';

@Module({
  imports: [
    TemplateModule.forRoot(path.join(__dirname, 'path', 'to', 'templates')),
  ],
})
export class AppModule {}
```

A sample template file looks something like this:

```html
<!-- /path/to/templates/dir/template.html.handlebars -->
<!DOCTYPE html>
<html lang="en">
  <body>
    <p>{{ content }}</p>
  </body>
</html>
```

## Usage

```ts
import { HandlebarsRenderer } from '@fastnloud/nest-template';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TemplateService {
  constructor(private readonly handlebarsRenderer: HandlebarsRenderer) {}

  async render(): Promise<string> {
    return this.handlebarsRenderer.render(['dir', 'template.html.handlebars'], {
      content: 'hello world',
    });
  }
}
```

## License

nest-template is [MIT licensed](LICENSE).
