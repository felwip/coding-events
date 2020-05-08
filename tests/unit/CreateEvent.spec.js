import { mount } from "@vue/test-utils";
import CreateEvent from "@/views/CreateEvent.vue";

describe("CreateEvent", () => {
  test("it has an <h1> heading", () => {
    const wrapper = mount(CreateEvent);
    // expect that there is an h1
    expect(wrapper.contains("h1")).toBe(true);
  });
  // test it shouold have a heading saying Create an Event
  test("it should have a <h1> heading saying Create an Event", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.get("h1").text()).toBe("Create an Event");
  });
});
