<script setup>

</script>

<template>
  <div class="navbar justify-center custom-layout">
    <div class="container flex justify-between gap-2">
      <div class="flex-1">
        <img src="@/assets/logo.svg" alt="Logo" class="min-h-12 h-12 hidden sm:block" />
        <img src="/public/favicon.ico" alt="Logo" class="pl-2 min-h-8 h-8 block sm:hidden " />
      </div>
      <div class="flex-2 sm:flex-1">
        <div class="form-control">
          <input type="text" placeholder="Search"
                 class="input input-bordered h-8 w-full rounded-full custom-border border-2 bg-white text-black" />
        </div>
      </div>
      <div class="flex-1 flex justify-end gap-2">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 40 41" fill="none">
              <path
                d="M9.16675 9.66663H30.8334C32.8417 9.66663 33.3334 9.16957 33.3334 8.45695C33.3334 7.74432 32.8417 7.16663 30.8334 7.16663H9.16675C7.15844 7.16663 6.66675 7.74432 6.66675 8.45695C6.66675 9.16957 7.15844 9.66663 9.16675 9.66663Z"
                fill="#DBDFE6" />
              <path
                d="M30.8334 19.2096H9.16675C7.15844 19.2096 6.66675 19.7873 6.66675 20.5C6.66675 21.2126 7.15844 21.7903 9.16675 21.7903H30.8334C32.8417 21.7903 33.3334 21.2126 33.3334 20.5C33.3334 19.7873 32.8417 19.2096 30.8334 19.2096Z"
                fill="#DBDFE6" />
              <path
                d="M30.8334 31.2526H9.16675C7.15844 31.2526 6.66675 31.8303 6.66675 32.543C6.66675 33.2556 7.15844 33.8333 9.16675 33.8333H30.8334C32.8417 33.8333 33.3334 33.2556 33.3334 32.543C33.3334 31.8303 32.8417 31.2526 30.8334 31.2526Z"
                fill="#DBDFE6" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow custom-layout rounded-box w-52">
            <li>
              <RouterLink to="/shops">Shops</RouterLink>
            </li>
            <li><a>Products</a></li>
            <li><a>Materials</a></li>
            <li><a>Craftsmen</a></li>
          </ul>
        </div>
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 40 41" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M5.78345 7.58337H7.45011L7.53345 7.60004C9.84371 7.64485 11.8623 9.17228 12.5334 11.3834L12.8668 12.5334H30.2501C31.7852 12.5404 33.2428 13.2084 34.2501 14.3667C35.2546 15.5323 35.6991 17.079 35.4668 18.6L34.4668 25.5C34.1337 28.1449 31.899 30.1376 29.2334 30.1667H19.4334C17.0923 30.158 15.0305 28.6235 14.3501 26.3834L10.1334 12.1667C9.81055 10.947 8.71179 10.0939 7.45011 10.0834H5.78345C5.09309 10.0834 4.53345 9.52373 4.53345 8.83337C4.53345 8.14302 5.09309 7.58337 5.78345 7.58337ZM16.7501 25.5834C17.1039 26.77 18.1952 27.5834 19.4334 27.5834H29.2334C30.6129 27.5684 31.7811 26.5621 32.0001 25.2L33.0001 18.2834C33.1363 17.4783 32.9143 16.6538 32.3922 16.026C31.87 15.3982 31.0999 15.0296 30.2834 15.0167H13.6168L16.7501 25.5834Z"
                      fill="#DBDFE6" />
                <path
                  d="M19.0501 32.1667C18.1296 32.1667 17.3834 32.9129 17.3834 33.8334C17.3834 34.7538 18.1296 35.5 19.0501 35.5C19.9706 35.5 20.7168 34.7538 20.7168 33.8334C20.7168 32.9129 19.9706 32.1667 19.0501 32.1667Z"
                  fill="#DBDFE6" />
                <path
                  d="M29.0501 32.1667C28.1296 32.1667 27.3834 32.9129 27.3834 33.8334C27.3834 34.7538 28.1296 35.5 29.0501 35.5C29.9706 35.5 30.7168 34.7538 30.7168 33.8334C30.7168 32.9129 29.9706 32.1667 29.0501 32.1667Z"
                  fill="#DBDFE6" />
              </svg>
              <span class="badge badge-sm indicator-item">1</span>
            </div>
          </div>
          <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 custom-layout shadow">
            <div class="card-body">
              <span class="font-bold text-lg">1 Item</span>
              <span class="text-custom-primary">Subtotal: $999</span>
              <div class="card-actions">
                <RouterLink to="/cart">
                  <button class="btn btn-custom-primary btn-block btn-ghost">View cart</button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 40 41" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M32.6334 28.35L33.0334 30.25C33.4125 31.8926 33.0382 33.6187 32.0128 34.9569C30.9875 36.295 29.4181 37.1054 27.7334 37.1666H12.2667C10.582 37.1054 9.01269 36.295 7.98732 34.9569C6.96195 33.6187 6.58769 31.8926 6.96674 30.25L7.36674 28.35C7.8268 25.7779 10.0378 23.8878 12.6501 23.8333H27.3501C29.9624 23.8878 32.1734 25.7779 32.6334 28.35ZM27.7334 34.65C28.5797 34.6402 29.3762 34.248 29.9001 33.5833V33.6C30.5429 32.7936 30.7933 31.7429 30.5834 30.7333L30.1834 28.8333C29.9615 27.4253 28.7745 26.3709 27.3501 26.3166H12.6501C11.2257 26.3709 10.0387 27.4253 9.81675 28.8333L9.41675 30.7333C9.21201 31.7376 9.46219 32.781 10.1001 33.5833C10.624 34.248 11.4204 34.6402 12.2667 34.65H27.7334Z"
                      fill="#DBDFE6" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.8334 20.4999H19.1667C15.4848 20.4999 12.5001 17.5152 12.5001 13.8333V9.43328C12.4956 7.94671 13.0842 6.51974 14.1353 5.46857C15.1865 4.4174 16.6135 3.82883 18.1001 3.83328H21.9001C23.3866 3.82883 24.8136 4.4174 25.8648 5.46857C26.9159 6.51974 27.5045 7.94671 27.5001 9.43328V13.8333C27.5001 17.5152 24.5153 20.4999 20.8334 20.4999ZM18.1001 6.33328C16.388 6.33328 15.0001 7.72119 15.0001 9.43328V13.8333C15.0001 16.1345 16.8655 17.9999 19.1667 17.9999H20.8334C23.1346 17.9999 25 16.1345 25 13.8333V9.43328C25 8.61111 24.6734 7.82261 24.0921 7.24125C23.5107 6.65988 22.7222 6.33328 21.9001 6.33328H18.1001Z"
                      fill="#DBDFE6" />
              </svg>
            </div>
          </div>
          <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content custom-layout rounded-box w-52">
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>