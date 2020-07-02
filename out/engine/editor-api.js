let index = 0;
function getHierarchyData(gameObject) {
    let name = gameObject.id ? gameObject.id : 'Unnamed' + index;
    index++;
    const children = [];
    if (!gameObject.prefabUrl) {
        for (let child of gameObject.$children) {
            children.push(getHierarchyData(child));
        }
    }
    else {
        name += "(Prefab)";
    }
    return { name, children, uuid: gameObject.uuid };
}
function getInspectorData(gameObject) {
    let name = gameObject.id ? gameObject.id : 'Unnamed';
    const uuid = gameObject.uuid;
    const behaviours = [];
    for (let child of gameObject.$behaviours) {
        const name = child.constructor.name;
        const behaviourProperties = child.constructor.properties || [];
        const properties = behaviourProperties.map(p => {
            return {
                key: p.key, defaultValue: p.defaultValue, value: child[p.key]
            };
        });
        const uuid = child.uuid;
        behaviours.push({ name, properties, uuid });
    }
    return { uuid, name, behaviours };
}
