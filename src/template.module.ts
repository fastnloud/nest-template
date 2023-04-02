import { DynamicModule, Global, Module } from '@nestjs/common';
import { HandlebarsRenderer } from './renderers/handlebars.renderer';

@Global()
@Module({})
export class TemplateModule {
  static forRoot(
    templatePath: string,
    compilerOptions: any = {},
  ): DynamicModule {
    return {
      module: TemplateModule,
      providers: [
        {
          provide: HandlebarsRenderer,
          useFactory: () => {
            return new HandlebarsRenderer(templatePath, compilerOptions);
          },
        },
      ],
      exports: [HandlebarsRenderer],
    };
  }
}
