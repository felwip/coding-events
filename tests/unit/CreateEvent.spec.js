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

  // it has a form element
  test("it has an <form> element", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.contains("form")).toBe(true);
  });

  // it should contain a title input field
  test("it should contain a title input field", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.contains("input[type='text'][name='title']")).toBe(true);
  });

  // it should have input with submit button
  test("it should have a clickable submit button", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.contains("input[type='submit'][value='Create']")).toBe(true);
  });
  // it should contain an input field for the title with the placeholder 'add a title'
  test("it should contain an input field for the title with the placeholder 'Add a Title'", () => {
    const wrapper = mount(CreateEvent);
    const titleInput = wrapper.get("input[name='title']");
    expect(titleInput.attributes("placeholder")).toBe("Add a Title");
  });
});
