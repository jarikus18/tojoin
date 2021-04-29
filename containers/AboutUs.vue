<template>
  <div class="page">
    <div class="head">
      <SectionTop :title="$prismic.asText(data.title)" mode="about" />
    </div>
    <section class="mission circle-before-blue circle-after-blue">
      <h3 class="h3 text-center">{{ data.our_mission }}</h3>
      <div class="container">
        <div class="mission-content dots-bg-greed__after dots-bg-greed__green">
          <Story>
            <div class="mission-body">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div v-html="$prismic.asHtml(data.our_mission_description)" />
            </div>
          </Story>
        </div>
      </div>
    </section>
    <section class="instruments circle-after-blue">
      <h3 class="h3 text-center">
        {{ $prismic.asText(data.want_to_give_business) }}
      </h3>
      <div class="container">
        <ul class="instruments-list">
          <li
            v-for="(resource, index) in data.instruments"
            :key="index"
            class="instruments-item"
          >
            <Step
              :data="{
                number: index + 1,
                image: resource.instrument_image.url,
                title: resource.instrument_title,
                description: resource.instrument_description,
              }"
            />
          </li>
        </ul>
      </div>
    </section>
    <section class="resources circle-before-blue circle-after-blue">
      <h3 class="h3 text-center">
        {{ $prismic.asText(data.want_to_give_client) }}
      </h3>
      <div class="container">
        <ul class="resources-list">
          <li
            v-for="(resource, index) in data.resources"
            :key="index"
            class="resources-item"
          >
            <Step
              :data="{
                number: index + 1,
                image: resource.resource_image.url,
                title: resource.resource_title,
                description: resource.resource_description,
              }"
            />
          </li>
        </ul>
      </div>
    </section>
    <section class="team circle-before-blue circle-after-blue">
      <h3 class="h3 text-center">{{ $prismic.asText(data.our_team) }}</h3>
      <div class="container">
        <ul class="team-list">
          <li
            v-for="(item, index) in data.team_list"
            :key="index"
            class="team-member"
          >
            <Member :data="item" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import SectionTop from '@/components/sections/SectionTop'
import Member from '@/components/team/Member'
import Step from '@/components/content/Step'
import Story from '@/components/content/Story'

export default {
  components: { SectionTop, Member, Step, Story },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  margin-bottom: 250px;
  position: relative;
  @media (max-width: 767px) {
    margin-bottom: 100px;
    background: linear-gradient(
      180deg,
      #e5efff 9.72%,
      #fafbfe 92.03%,
      #fafbfe 145.03%
    );
  }
}
.mission {
  margin-bottom: 100px;
  background: linear-gradient(
    180deg,
    rgba(236, 240, 253, 0) 0%,
    rgba(236, 240, 253, 0.53) 14.32%,
    #ecf0fd 45.83%,
    rgba(236, 240, 253, 0.43) 84.33%,
    rgba(236, 240, 253, 0) 100%
  );
  & .h3 {
    margin-bottom: 100px;
  }
  &-content {
    max-width: 900px;
    width: 100%;
    margin: auto;
    position: relative;
    &::v-deep .body-content {
      background-size: 230px;
    }
    &.dots-bg-greed__after::after {
      height: 242px;
      width: 534px;
      transform: rotate(90deg);
      right: -35%;
      top: 40%;
    }
    &.dots-bg-greed__green::before {
      width: 242px;
      height: 534px;
      left: -15%;
      top: -10%;
    }
  }
  &-body {
    padding: 41px 70px 70px;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #6a6a6a;
  }
  &.circle-before-blue::before,
  &.circle-after-blue::after {
    background: linear-gradient(224.7deg, #d2e4ff 7.09%, #fafbfe 100.49%);
    width: 172px;
    height: 172px;
  }
  &.circle-before-blue::before {
    left: 5%;
    bottom: 10%;
  }
  &.circle-after-blue::after {
    top: 5%;
    right: 5%;
  }
  @media (max-width: 767px) {
    background: none;
    padding: 0 15px;
    & .h3 {
      margin-bottom: 50px;
      text-align: left;
    }
    &.circle-before-blue::before,
    &.circle-after-blue::after,
    &-content.dots-bg-greed__green::before,
    &-content.dots-bg-greed__after::after {
      content: none;
    }
    &-body {
      padding: 21px 15px 20px;
      font-size: 18px;
      line-height: 25px;
    }
  }
}

.resources,
.instruments {
  position: relative;
  margin-bottom: 100px;
  &-list {
    max-width: 1480px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 100px;
  }
  &-item {
    margin: 0 0 5%;
    &:nth-child(even) {
      margin-top: 6%;
    }
  }
  &.circle-before-blue::before {
    background: linear-gradient(225.91deg, #8fb8fd -46.01%, #fafbfe 85.99%);
    transform: rotate(144.55deg);
    width: 323px;
    height: 323px;
    left: -120px;
    top: -5%;
  }
  &.circle-after-blue::after {
    background: linear-gradient(225.91deg, #8fb8fd -46.01%, #fafbfe 85.99%);
    width: 323px;
    height: 323px;
    right: -150px;
    bottom: 30%;
  }
  @media (max-width: 767px) {
    & .h3 {
      text-align: left;
      padding-left: 15px;
      margin-bottom: 20px;
    }
    &-list {
      margin: 0 auto;
      flex-direction: column;
      align-items: center;
    }
    &-item {
      margin-bottom: 60px;
      margin-top: 50px;
      max-width: 400px;
    }
    &.circle-after-blue::after,
    &.circle-before-blue::before {
      content: none;
    }
  }
}

.team {
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(236, 240, 253, 0) 5.87%,
    rgba(236, 240, 253, 0.53) 30.49%,
    #ecf0fd 49.01%,
    rgba(236, 240, 253, 0.43) 85.25%,
    rgba(236, 240, 253, 0) 100%
  );
  & .h3 {
    margin-bottom: 60px;
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1480px;
    margin: auto;
  }
  &-member {
    flex: 0 0 33.33%;
    text-align: center;
    margin-bottom: 60px;
  }
  &.circle-before-blue::before {
    background: linear-gradient(225.91deg, #8fb8fd -46.01%, #fafbfe 85.99%);
    transform: rotate(147.95deg);
    width: 464px;
    height: 464px;
    left: -200px;
    bottom: 10%;
  }
  &.circle-after-blue::after {
    background: linear-gradient(225.91deg, #8fb8fd -46.01%, #fafbfe 85.99%);
    width: 323px;
    height: 323px;
    right: -150px;
    bottom: 0;
  }
  @media (max-width: 767px) {
    background: none;
    padding: 0 15px;
    &-list {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &-member {
      flex: 0 0 auto;
      width: 100%;
      margin: 0 auto 30px;
    }
    &.circle-before-blue::before,
    &.circle-after-blue::after {
      content: none;
    }
  }
}
</style>
