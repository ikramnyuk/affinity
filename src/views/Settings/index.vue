<template>
    <div class="page">
		<PageHeader title="Settings" :icon="icon" description="Lorem ipsum dolor sit amet."></PageHeader>

		<div class="main-content settings-page desktop-settings">
			<div class="custom-col">
				<div class="setting-item">
					<div class="label">BRANDING AND CUSTOMIZATION</div>
				
					<form class="form-item">
						<div class="input-item">
							<div class="title">
								<span>Logo</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<input type="text" placeholder="Enter logo URL...">
						</div>

						<div class="input-item">
							<div class="title">
								<span>Background</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<input type="text" placeholder="Enter background URL...">
						</div>

						<div class="input-item">
							<div class="title">
								<span>Motto</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<input type="text" placeholder="Enter motto URL...">
						</div>

						<div class="input-item">
							<div class="title">
								<span>Color</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<input type="text" placeholder="Enter color hex code...">
						</div>
					</form>
				</div>

				<div class="setting-item">
					<div class="label">BRANDING AND CUSTOMIZATION</div>

					<div class="img-wrap">
						<img src="../../assets/setting-img.png" alt="dashboard">
					</div>
				</div>
			</div>
			
			<div class="custom-col">
				<div class="setting-item">
					<div class="label">PURCHASE EMAIL</div>
				
					<form class="form-item">
						<div class="input-item">
							<div class="title">
								<span>Subject</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<input type="text" placeholder="Enter email subject...">
						</div>

						<div class="input-item">
							<div class="title">
								<span>Content</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<textarea type="text" placeholder="Enter email content…"></textarea>
						</div>
					</form>
				</div>

				<div class="setting-item">
					<div class="label">STRIPE</div>
				
					<form class="form-item">
						<div class="input-item">
							<div class="title">
								<span>Stripe publishable key</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<input type="text" placeholder="Enter Stripe publishable key...">
						</div>
					</form>
				</div>

				<div class="setting-item">
					<div class="label">DISCORD WEBHOOK</div>
				
					<form class="form-item">
						<div class="input-item">
							<div class="title">
								<span>Footer text</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<input type="text" placeholder="Enter footer text...">
						</div>
					</form>
				</div>

				<div class="setting-item">
					<div class="label">TWITTER SUCCESS CHANNEL</div>
				
					<form class="form-item">
						<div class="input-item">
							<div class="title">
								<span>Discord success channel</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<input type="text" placeholder="Enter Discord success channel...">
						</div>
					</form>
				</div>
			</div>
		</div>

		<div class="main-content settings-page mobile-settings">
			<div class="custom-col">
				<div class="setting-item">
					<div class="label">BRANDING AND CUSTOMIZATION</div>
				
					<form class="form-item">
						<div class="input-item">
							<div class="title">
								<span>Logo</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<input type="text" placeholder="Enter logo URL...">
						</div>

						<div class="input-item">
							<div class="title">
								<span>Background</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<input type="text" placeholder="Enter background URL...">
						</div>

						<div class="input-item">
							<div class="title">
								<span>Motto</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<input type="text" placeholder="Enter motto URL...">
						</div>

						<div class="input-item">
							<div class="title">
								<span>Color</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<input type="text" placeholder="Enter color hex code...">
						</div>
					</form>
				</div>
			</div>
			
			<div class="custom-col">
				<div class="setting-item">
					<div class="label">PURCHASE EMAIL</div>
				
					<form class="form-item">
						<div class="input-item">
							<div class="title">
								<span>Subject</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<input type="text" placeholder="Enter email subject...">
						</div>

						<div class="input-item">
							<div class="title">
								<span>Content</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<textarea type="text" placeholder="Enter email content…"></textarea>
						</div>
					</form>
				</div>

				<div class="setting-item">
					<div class="label">STRIPE</div>
				
					<form class="form-item">
						<div class="input-item">
							<div class="title">
								<span>Stripe publishable key</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<input type="text" placeholder="Enter Stripe publishable key...">
						</div>
					</form>
				</div>

				<div class="setting-item">
					<div class="label">DISCORD WEBHOOK</div>
				
					<form class="form-item">
						<div class="input-item">
							<div class="title">
								<span>Footer text</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<input type="text" placeholder="Enter footer text...">
						</div>
					</form>
				</div>

				<div class="setting-item">
					<div class="label">TWITTER SUCCESS CHANNEL</div>
				
					<form class="form-item">
						<div class="input-item">
							<div class="title">
								<span>Discord success channel</span>
								<img src="../../assets/info.svg" alt="info">
								<div class="custom-tooltip">Some info about the field</div>
							</div>

							<input type="text" placeholder="Enter Discord success channel...">
						</div>
					</form>
				</div>

				<div class="setting-item">
					<div class="label">BRANDING AND CUSTOMIZATION</div>

					<div class="img-wrap">
						<img src="../../assets/setting-img.png" alt="dashboard">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PageHeader from '../../components/PageHeader';

	import HomeIcon from '../../assets/settings-active.svg';

	import './style.scss';

	export default {
		name: 'Settings',
		components: { PageHeader },
		data: () => {
			return {
				icon: HomeIcon,
			}
		}
	}
</script>