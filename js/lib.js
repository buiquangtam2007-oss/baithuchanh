const products = [
    {
        name: "Hoa Cúc",
        image: "../assets/images/hoacuc.jfif",
        price: "2.500.000 ₫",
        description: "Không rực rỡ hay kiêu sa, hoa cúc mang nét đẹp bình dị, thuần khiết và kiên cường — biểu tượng của lòng hiếu thảo và sự bền bỉ.",
        link: "#"
    },
    {
        name: "Hoa Hồng",
        image: "../assets/images/hoahong.jpg",
        price: "9.999.000 ₫",
        description: "Với những cánh hoa mềm mại cùng hương thơm nồng nàn, hoa hồng là biểu tượng bất diệt của tình yêu.",
        link: "chitiet.html"
    },
    {
        name: "Hoa Lan",
        image: "../assets/images/hoalan.jfif",
        price: "1.500.000 ₫",
        description: "Sở hữu cấu trúc hoa hoàn hảo cùng vẻ đẹp thanh lịch, hoa lan là biểu tượng của sự quý phái và hoàn mỹ.",
        link: "#"
    },
    {
        name: "Hoa Ly",
        image: "../assets/images/hoaly.jfif",
        price: "4.000.000 ₫",
        description: "Hoa ly chinh phục lòng người bởi những cánh hoa lớn cùng hương thơm ngào ngạt, đại diện cho sự thanh cao và lòng thủy chung.",
        link: "#"
    },
    {
        name: "Hoa Linh Lan",
        image: "../assets/images/hoalinhlan.webp",
        price: "4.500.000 ₫",
        description: "Mang hình dáng những chiếc chuông nhỏ trắng muốt, hoa linh lan là sứ giả của sự may mắn và niềm vui tái sinh.",
        link: "#"
    },
    {
        name: "Hoa Tulip",
        image: "../assets/images/hoatulip.jfif",
        price: "7.500.000 ₫",
        description: "Với phom dáng gọn gàng, hiện đại, hoa tulip tượng trưng cho sự hoàn hảo và một tình yêu sâu sắc, chân thành.",
        link: "#"
    },
    {
        name: "Hoa Loa Kèn",
        image: "../assets/images/hoaloaken.jfif",
        price: "6.500.000 ₫",
        description: "Với sắc trắng tinh khôi và dáng hoa vươn cao, hoa loa kèn biểu tượng cho sự trong trắng và đức hạnh.",
        link: "#"
    },
    {
        name: "Hoa Mẫu Đơn",
        image: "../assets/images/hoamaudon.jfif",
        price: "3.000.000 ₫",
        description: "Được mệnh danh là \"vua của các loài hoa\", mẫu đơn là biểu tượng đỉnh cao của sự giàu sang và vinh hoa phú quý.",
        link: "#"
    }
];
function renderProductCard(product) {
    return `
        <div class="col">
            <div class="card product-item">
                <div class="ratio ratio-1x1 product-image">
                    <img src="${product.image}" alt="${product.name}" class="card-img-top">
                </div>
                <div class="card-body product-info">
                    <h4 class="card-title">${product.name}</h4>
                    <p class="price">${product.price}</p>
                    <p class="description">${product.description}</p>
                    <a href="${product.link}" class="btn-detail">Xem chi tiết</a>
                </div>
            </div>
        </div>
    `;
}
function renderProducts() {
    const list = document.getElementById("productList");
    if (!list) return;
    list.innerHTML = products.map(renderProductCard).join("");
}

document.addEventListener("DOMContentLoaded", renderProducts);