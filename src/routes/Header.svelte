<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="corner"></div>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/history">History</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
%flex-center{
	width: 100%;
}
header, nav, ul {
	@extend %flex-center;
}
 ul {
		margin-top: 40px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 50px;
		list-style: none;

		& > li > a:hover {
			text-decoration: none;
		}
	}
</style>