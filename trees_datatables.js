// 01 - First, we add an 'image_urls' property to each tree object in the treesData array.
treesData.forEach(function(tree) {
  var images = [
    {imageUrl:"images/trees/" + tree.tree_code + "/0_overall.jpg", title: "ภาพรวม"},
    {imageUrl:"images/trees/" + tree.tree_code + "/1_leaves.jpg", title: "ใบ"},
    {imageUrl:"images/trees/" + tree.tree_code + "/2_flowers.jpg", title: "ดอก"},
    {imageUrl:"images/trees/" + tree.tree_code + "/3_fruits.jpg", title: "ผล"}
  ];
  tree.image_urls = images;
});

// Now we can initialize the DataTable with the treesData array as the data source.
$(document).ready(function() {
    var table = $('#trees-table').DataTable({ // Initialize DataTable on the #trees-table element
        pageLength: 10, // Set default page length to 10 rows
        lengthMenu: [5, 10, 20, 25, 50], // Define page length options for the user
        language: { // Thai language settings for DataTables
            sProcessing:   "กำลังดำเนินการ...",
            sLengthMenu:   "แสดง _MENU_ แถว",
            sZeroRecords:  "<span style='color: red;margin: 30px;display: block;'>ไม่พบข้อมูล - ตรวจสอบเงื่อนไขการค้นหา</span>",
            sInfo:         "แสดง <strong>_START_</strong> ถึง <strong>_END_</strong> จากทั้งหมด <strong>_TOTAL_</strong> แถว",
            sInfoEmpty:    "ไม่พบข้อมูล",
            sInfoFiltered: "(กรองข้อมูลทั้งหมด _MAX_ แถว)",
            sSearch:       "ค้นหา:",
            oPaginate: { // Pagination controls
                sFirst:    "หน้าแรก",
                sPrevious: "ก่อนหน้า",
                sNext:     "ถัดไป",
                sLast:     "หน้าสุดท้าย"
            }
        },
        responsive: true, // Enable responsive design for better display on different screen sizes
        columnDefs: [
            {
                searchable: false, // Disable searching
                orderable: false, // Disable ordering
                targets: -1 // Disable search and ordering on the image thumbnail column (last column: index -1)
            },
            {
                searchable: false, orderable: false, target: -2
            }
        ],
        data: treesData, // Use the treesData array as the data source for the table
        columns: [
            { data: 'fid', title: 'FID', titleAttr: 'FID', className: 'dt-center'  }, // same as row number, so hide this column
            { data: 'tree_code', title: 'รหัสต้นไม้', titleAttr: 'Tree Code' , className: 'dt-center' },
            { data: 'tree_name_th', title: 'ชื่อต้นไม้ (TH)', titleAttr: 'Tree Name (TH)' },
            { data: 'tree_name_en', title: 'ชื่อต้นไม้ (EN)', titleAttr: 'Tree Name (EN)' },
            { data: 'tree_type', title: 'ประเภทต้นไม้', titleAttr: 'Tree Type' },
            {data: 'tree_height_m', title: 'ความสูง (ม.)', titleAttr: 'Tree Height (m)', className: 'dt-center'},
            {data: 'dbh_cm', title: 'เส้นผ่านศูนย์กลาง (ซม.)', titleAttr: 'DBH (cm)', className: 'dt-center'},
            {data: 'carbon_storage', title: 'กักเก็บคาร์บอน (กก.)', titleAttr: 'Carbon Storage (kg)', className: 'dt-center'},
            {data: 'co2_absorp', title: 'ดูดซับ CO2 (กก.)', titleAttr: 'CO2 Absorption (kg)', className: 'dt-center'},
        ]
    });
});
