<template>
  <div class="grid">
    <div class="columns-4">
      <div class="form-control">
        <div class="input-group">
          <select class="select select-bordered">
            <option disabled selected>Pick category</option>
            <option>T-shirts</option>
            <option>Mugs</option>
          </select>
          <button class="btn">Go</button>
        </div>
      </div>
    </div>

    <div class="columns-4">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Your Email</span>
        </label>
        <label class="input-group">
          <span>Email</span>
          <input type="text" placeholder="info@site.com" class="input input-bordered" />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
