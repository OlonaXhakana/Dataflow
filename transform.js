function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.first_name = values[0];
    obj.last_name = values[1];
    obj.age = values[2];
    obj.gender = values[3];
    obj.occupation = values[4];
    obj.location = values[5];
    obj.email = values[6];
    obj.phone = values[7];
    obj.join_date = values[8];
    obj.status = values[9];

    var jsonString = JSON.stringify(obj);
    return jsonString;
}
