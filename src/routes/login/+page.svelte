<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="">
	<div class="min-h-screen bg-gray-100 flex flex-col justify-center">
		<div class="relative py-3 sm:min-w-[450px] sm:mx-auto">
			<div
				class="absolute inset-0 bg-gradient-to-r from-blue-light/50 to-blue-light shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
			/>
			<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
				<div class="max-w-md mx-auto">
					<div>
						<h1 class="text-2xl font-semibold">Iniciar Sesion</h1>
					</div>
					<form action="?/login" method="POST">
						<div class="divide-y divide-gray-200">
							<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
								<div class="relative">
									<input
										autocomplete="off"
										id="email"
										name="email"
										type="text"
										class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
										placeholder="Correo electrónico"
									/>
									<label
										for="email"
										class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
										>Correo electrónico</label
									>
								</div>
								<div class="relative">
									<input
										autocomplete="off"
										id="password"
										name="password"
										type="password"
										class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
										placeholder="Contraseña"
									/>
									<label
										for="password"
										class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
										>Contraseña</label
									>
								</div>
								<div class="relative">
									<button type="submit" class="bg-blue-light text-white rounded-md px-2 py-1"
										>Aceptar</button
									>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
