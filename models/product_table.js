var pg_conn = require('./pg_config'); 
async function display_product(shop_id){
    let query_product;
    if(shop_id == 0) {
        query_product = 'SELECT * FROM products ORDER BY id;'
    }else{
        query_product = {
            text: 'SELECT * FROM products WHERE shop_id=$1 ORDER BY id', 
            values: [shop_id]
        };
    }
    //init the table_string, with the table tag
    const data = await pg_conn.query(query_product);
    //pg_conn.end;
    let table_string = 
        `
        <style>
        table{
            font-family: arial, sans-serif;
            boder-collapse: collapse;
            width:100%;
        }
        .heading{
            font-weight: bold:
            text-align:center;
            font-size:20px;
            margin-top:10px;
            margin-bottom:10px;
            color:red;
        }
        </style>
        </head>
        <body>
        <h2 class "heading"> Table Products</h2>
        <table class="table">
        <tr>`
        //display all table's header
            let num_fields = data.fields.length;
            for( let i = 0; i< num_fields; i++){
                table_string += `<th>${data.fields[i].name}</th>`
            };
            table_string += `<th>Actions</th>`
            table_string += `</tr>`;
            //display all rows of table
            let num_rows = data.rowCount;//row.lenth or rowsCount 
            for (let i = 0; i < num_rows; i++){
                table_string+=`<form action="/users/crud" method="post">`
                table_string += `<tr>`;
                for (let j =0; j<num_fields; j++){
                    let field_name = data.fields[j].name
                    let cell = data.rows[i][field_name];
                    table_string += `<td><input type="text" name=${field_name} value=${cell}></td>`;
                }
                table_string += 
                `<td>
                <button type='submit' name='crud' class="btn btn-success" value='update'>Update</button>
                <button type='submit' name='crud' class="btn btn-danger" value='delete'>Delete</button>
                </td>
                </tr></form>`
            }
            //add an empty row and insert button at the end of row
            table_string += `<tr><form action="/users/crud" method="post">`
            for (let j =0; j<num_fields; j++){
                let field_name = data.fields[j].name
                table_string += `<td><input type="text" name=${field_name}></td>`;
            }
            table_string += `<td>
                <button type='submit' name='crud' class="btn btn-primary" value='add'>Add</button>
            </td> `;
        table_string += `</tr></form></table>`;

    return table_string;
}
module.exports=display_product;