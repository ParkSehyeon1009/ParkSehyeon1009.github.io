const isSubPage = window.location.pathname.includes('/html/');
const root = isSubPage ? '../' : '';

document.getElementById("nav-placeholder").innerHTML = `
    <header class="header">
        <div class="container">

            <!-- 로고 -->
            <div class="logo">
                <a href="${root}index.html">Portfolio</a>
            </div>

            <!-- 메뉴 -->
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="${root}html/about.html">자기소개</a></li>
                    <li><a href="${root}html/Project.html">프로젝트</a></li>
                    <li><a href="${root}html/Stack.html">기술</a></li>
                </ul>
            </nav>

        </div>
    </header>
`;
