function show_catalogue(label_to_show, menu_to_show) {
    //setting default color of all labels
    document.querySelectorAll(".menu_label").forEach((label) => {
        label.style.backgroundColor = "#6C96AA";
    });
    //hide all menu headings
    document.querySelectorAll(".menu_items").forEach((menu) => {
        menu.style.display = "none";
    });
    let menu_label = document.getElementById(label_to_show);
    menu_label.style.backgroundColor = "white";
    let menu = document.getElementById(menu_to_show);
    menu.style.display = 'block';
}

const add_buttons = document.querySelectorAll('.add_button');
add_buttons.forEach(function (btn){
    btn.addEventListener('click', function() {
        let btn_id = btn.id;
        let desc = document.getElementById(btn_id + '-img').alt;
        let qty = document.getElementById(btn_id + '-qty').value;
        let ordered_items_table = document.querySelector('#ordered_items_table tbody');
        let new_row = document.createElement("tr");
        let new_desc = document.createElement("td");
        let new_qty = document.createElement("td");
        new_desc.className = "desc";
        new_qty.className = "item_qty";
        new_desc.textContent = desc;
        new_qty.textContent = qty;
        new_row.appendChild(new_desc);
        new_row.appendChild(new_qty);
        ordered_items_table.appendChild(new_row);
        recal();
    });
})


function recal() {
    const foooter_qty = document.querySelector('#ordered_table_footer .qty');
    let total_qty = 0;
    let qties = document.querySelectorAll(".item_qty");
    for (let i = 0; i < qties.length; i++) {
        let qty = parseInt(qties[i].textContent);
        if (!isNaN(qty)) {
            total_qty += qty;
        }
    }
    foooter_qty.textContent = total_qty;
}

function delete_last_item() {
    let rows = document.querySelectorAll("#ordered_items_table tbody tr");
    let numRows = rows.length;
    if (numRows > 0) {
        let lastRow = rows[numRows - 1];

        lastRow.remove();

        recal();
    }

    return false;
}