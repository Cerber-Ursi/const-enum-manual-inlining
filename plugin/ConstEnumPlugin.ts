import { Compiler, DefinePlugin } from 'webpack';
import * as ts from 'typescript';

export = class ConstEnumPlugin {
  public apply(compiler: Compiler) {
    compiler.hooks.afterResolvers.tap('ConstEnumPlugin', (compiler) => {

      const prog = ts.createProgram(['src/index.ts'], {});
      const consts = prog.getSourceFiles().reduce<Record<string, string>>((items, file) => {
        file.statements.filter(ts.isEnumDeclaration)
          // tslint:disable-next-line:no-console
          .forEach((stmt) => {
            stmt.members.forEach((child) => {
              if (ts.isComputedPropertyName(child.name)) {
                console.error('Computed property names can\'t be used in const enums');
                return;
              }
              if (!child.initializer) {
                return; // TODO auto-compute?
              }
              const name = stmt.name.text + '.' + child.name.text;
              items[name] = (child.initializer.getFullText(file) + ` /* ${name} */`).trim();
            });
          });
        return items;
      }, {});

      new DefinePlugin(consts).apply(compiler);
    });
  }
}
