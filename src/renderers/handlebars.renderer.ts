import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import Handlebars from 'handlebars';
import * as path from 'path';

@Injectable()
export class HandlebarsRenderer {
  constructor(
    private readonly templatePath: string = '',
    private readonly compilerOptions: any = {},
  ) {}

  render(paths: string[], context: any): string {
    const template = fs.readFileSync(
      path.join(this.templatePath, ...paths),
      'utf8',
    );

    const delegate = Handlebars.compile(template, this.compilerOptions);

    return delegate(context);
  }
}
