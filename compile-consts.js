const fs = require("fs");
const ts = require("typescript");

const prog = ts.createProgram(['src/index.ts'], {});
const consts = prog.getSourceFiles().reduce((items, file) => {
    file.statements.filter((stmt) => stmt.kind === ts.SyntaxKind.EnumDeclaration)
        // tslint:disable-next-line:no-console
        .forEach((stmt) => {
        stmt.members.forEach((child) => {
            const name = stmt.name.text + '.' + child.name.text;
            items[name] = (child.initializer.getFullText(file) + ` /* ${name} */`).trim();
        });
    });
    return items;
}, {});

fs.writeFileSync('./defined-consts.json', JSON.stringify(consts, null, 1));
