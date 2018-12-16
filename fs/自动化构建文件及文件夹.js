const fs = require('fs');
const path = require('path');
const root = path.resolve('./')
const projectData = {
  projectName: 'smgzh',
  list: [
    { name: 'css', type: 'dir' },
    { name: 'js', type: 'dir', children: [
        { name: 'jquery', type: 'dir' },
        { name: 'SCUI', type: 'dir', children: [
            { name: 'index', type: 'file', content: 'window.load = function() { console.log("完美世界") }' }
          ] }
      ] },
    { name: 'image', type: 'dir' },
    { name: 'index.html', type: 'file', content: '<html>\n\t<head>\n\t\t<title>自动化构建</title>\n\t</head>\n\t<body>\n\t</body>\n</html>' }
  ]
};
/*
const dirPath = path.join(root, projectData.projectName);
fs.exists(path.join(dirPath, projectData.projectName), (err, stats)=> {
  if (!err) {
    if (projectData.projectName) {
      fs.mkdirSync(projectData.projectName);
      projectData.list.forEach(list=> {
        const childPath = path.join(dirPath, list.name);
        const content = list.content || '';
        switch (list.type) {
          case 'dir':
            fs.mkdir(childPath, (err, info)=> {
              console.log(info);
            });
            break
          case 'file':
            fs.writeFile(path.join(dirPath, list.name), content, (err, file)=> {
              console.log(file)
            })
        }
      });
    }
  }
});*/

CreateProject(root, projectData);

function CreateProject(rootPath, fileParam) {
  const createChild = (parentPath, list)=> {
    list = list || [];
    list.forEach(elt => {
      switch (elt.type) {
        case 'dir':
          fs.mkdir(path.join(parentPath, elt.name), (err)=> {
            if (!err && elt.children) {
              createChild(path.join(parentPath, elt.name), elt.children);
            }
          });
          break;
        case 'file':
          fs.writeFileSync(path.join(parentPath, elt.name), elt.content || '');
          break;
      }
    })
  };
  const currentPath = path.join(rootPath, fileParam.projectName);
  fs.mkdir(currentPath, function(err) {
    if (!err) {
      createChild(currentPath, fileParam.list);
    }
  })
}


